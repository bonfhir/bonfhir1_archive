/* eslint-disable @typescript-eslint/no-explicit-any */
import { FhirResource } from "fhir/r4";
import _ from "lodash";
import { narrative } from "./narratives";
import { isDomainResource } from "./types";

/**
 * Recursively deep-merge 2 resources, taking care of duplicating entry elements using their ids.
 * The narrative is re-generated if need be.
 */
export function merge<TResource extends FhirResource>(
  args: MergeArgs<TResource> & {
    /**
     * Custom `Narrative` generator. If not provided, a default narrative generator is used.
     */
    narrativeGenerator?: typeof narrative | null | undefined;
  }
): MergeResult<TResource> {
  const { narrativeGenerator, ...mergeArgs } = args;
  const result = mergeFhirResources(mergeArgs);

  if (result.isUpdated && result.merged && isDomainResource(result.merged)) {
    result.merged.text = (narrativeGenerator || narrative)(result.merged);
  }

  return result;
}

/**
 * The result of a merge operation.
 */
export interface MergeResult<T> {
  /**
   * Indicates that the merged value is different from the original current value.
   */
  isUpdated: boolean;

  /**
   * The final merged result.
   */
  merged: T | null | undefined;
}

export interface HasId {
  id: string;
}

export function isHasId(value: unknown): value is HasId {
  return (
    typeof value === "object" && typeof (value as HasId)["id"] === "string"
  );
}

export interface MergeArgs<T> {
  current: T | null | undefined;
  incoming: T | null | undefined;
}

/**
 * Recursively deep-merge current and incoming, taking care of duplicating entry elements using their ids.
 */
export function mergeFhirResources<T>({
  current,
  incoming,
}: MergeArgs<T>): MergeResult<T> {
  if (current === undefined || current === null) {
    return {
      isUpdated: true,
      merged: _.cloneDeep(incoming),
    };
  }

  const result = {
    isUpdated: false,
    merged: _.cloneDeep(current),
  };

  if (incoming === undefined || incoming === null) {
    return result;
  }

  for (const [incomingKey, incomingValue] of Object.entries(incoming) as [
    keyof T,
    unknown
  ][]) {
    const mergeResult = mergeFhirValues({
      current: current[incomingKey],
      incoming: incomingValue,
    });
    result.isUpdated = result.isUpdated || mergeResult.isUpdated;
    result.merged[incomingKey] = mergeResult.merged as any;
  }

  return result;
}

export function mergeFhirResourcesArrays<T>({
  current,
  incoming,
}: MergeArgs<T[]>): MergeResult<T[]> {
  if (current === undefined || current === null) {
    return {
      isUpdated: true,
      merged: _.cloneDeep(incoming),
    };
  }

  const result = {
    isUpdated: false,
    merged: _.cloneDeep(current),
  };

  if (incoming === undefined || incoming === null) {
    return result;
  }

  for (const incomingValue of incoming) {
    const currentEntryIndex = current.findIndex((x) => {
      if (isHasId(incomingValue)) {
        return isHasId(x) && x.id === incomingValue.id;
      }

      return _.isEqual(x, incomingValue);
    });
    const currentEntry =
      currentEntryIndex >= 0 ? current[currentEntryIndex] : undefined;

    if (!currentEntry) {
      result.isUpdated = true;
      result.merged.push(incomingValue);
      continue;
    }

    const mergeResult = mergeFhirValues({
      current: currentEntry,
      incoming: incomingValue,
    });
    result.isUpdated = result.isUpdated || mergeResult.isUpdated;
    if (mergeResult.merged !== null && mergeResult.merged !== undefined) {
      result.merged.splice(currentEntryIndex, 1, mergeResult.merged);
    } else {
      result.merged.splice(currentEntryIndex, 1);
    }
  }

  return result;
}

function mergeFhirValues<T = any>({
  current,
  incoming,
}: MergeArgs<T>): MergeResult<T> {
  if (current === null || current === undefined) {
    return {
      isUpdated: true,
      merged: _.cloneDeep(incoming),
    };
  }

  if (Array.isArray(current)) {
    if (!Array.isArray(incoming)) {
      throw new Error("Can't merge a non-array value into an array.");
    }

    return mergeFhirResourcesArrays({ current, incoming }) as MergeResult<T>;
  }

  if (typeof current === "object") {
    return mergeFhirResources({
      current: current,
      incoming: incoming,
    });
  }

  return {
    isUpdated: !_.isEqual(current, incoming),
    merged: incoming,
  };
}
