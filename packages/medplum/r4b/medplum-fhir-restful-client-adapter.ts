/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  ConcurrencyParameters,
  ConditionalSearchParameters,
  ExtractResource,
  FhirRestfulClient,
  GeneralParameters,
  HistoryParameters,
  isFhirResource,
  JSONPatchBody,
  ResourceType,
} from "@bonfhir/core/r4b";
import { MedplumClient } from "@medplum/core";
import { Bundle, CapabilityStatement, FhirResource } from "fhir/r4";

/**
 * Create an adapter from a `MedplumClient` to conform to `FhirRestfulClient`.
 *
 * Known limitations:
 *    - `options` on all methods are not supported
 *    - only 3 operations can be executed: `$expand`, `$everything`, and `$graph`
 *    - `history` requires an id - can't retrieve the history for all resources at once
 *    - `capabilities` is not supported
 */
export function buildFhirRestfulClientAdapter(
  client: MedplumClient
): FhirRestfulClient {
  return {
    async read<TResource extends ResourceType>(
      type: TResource,
      id: string,
      options?: GeneralParameters | null | undefined
    ): Promise<ExtractResource<TResource> | undefined> {
      if (options) {
        throw new Error("read#options is not supported by the MedplumClient.");
      }

      try {
        return await client.readResource(type, id);
      } catch (error) {
        if (
          isFhirResource("OperationOutcome", error) &&
          ["not-found", "gone"].includes(error.id!)
        ) {
          return undefined;
        }
        throw error;
      }
    },

    async vread<TResource extends ResourceType>(
      type: TResource,
      id: string,
      vid: string,
      options?: GeneralParameters | null | undefined
    ): Promise<ExtractResource<TResource> | undefined> {
      if (options) {
        throw new Error("vread#options is not supported by the MedplumClient.");
      }

      try {
        return await client.readVersion(type, id, vid);
      } catch (error) {
        if (
          isFhirResource("OperationOutcome", error) &&
          ["not-found", "gone"].includes(error.id!)
        ) {
          return undefined;
        }
        throw error;
      }
    },

    update<TResource extends FhirResource>(
      body: TResource,
      options?:
        | (GeneralParameters &
            ConcurrencyParameters &
            ConditionalSearchParameters)
        | null
        | undefined
    ): Promise<TResource> {
      if (options) {
        throw new Error(
          "update#options is not supported by the MedplumClient."
        );
      }

      return client.updateResource(body);
    },

    patch<TResource extends ResourceType>(
      type: TResource,
      id: string,
      body: JSONPatchBody,
      options?:
        | (GeneralParameters &
            ConcurrencyParameters &
            ConditionalSearchParameters)
        | null
        | undefined
    ): Promise<ExtractResource<TResource>> {
      if (options) {
        throw new Error("patch#options is not supported by the MedplumClient.");
      }

      return client.patchResource(type, id, body);
    },

    async delete(
      type: ResourceType,
      id: string,
      options?:
        | (GeneralParameters & ConditionalSearchParameters)
        | null
        | undefined
    ): Promise<void> {
      if (options) {
        throw new Error(
          "delete#options is not supported by the MedplumClient."
        );
      }

      try {
        return await client.deleteResource(type, id);
      } catch (error) {
        if (
          isFhirResource("OperationOutcome", error) &&
          ["not-found", "gone"].includes(error.id!)
        ) {
          return undefined;
        }
        throw error;
      }
    },

    history<TResource extends ResourceType>(
      type?: TResource | null | undefined,
      id?: string | null | undefined,
      options?: (GeneralParameters & HistoryParameters) | null | undefined
    ): Promise<Bundle<ExtractResource<TResource>>> {
      if (options) {
        throw new Error(
          "history#options is not supported by the MedplumClient."
        );
      }

      if (!id) {
        throw new Error(
          "history#id is mandatory when using the MedplumClient."
        );
      }

      return client.readHistory(type, id);
    },

    create<TResource extends FhirResource>(
      body: TResource,
      options?:
        | (GeneralParameters & ConditionalSearchParameters)
        | null
        | undefined
    ): Promise<TResource> {
      if (options) {
        throw new Error(
          "create#options is not supported by the MedplumClient."
        );
      }

      return client.createResource(body);
    },

    search<TResource extends ResourceType>(
      type?: TResource | null | undefined,
      parameters?: string | null | undefined,
      options?: GeneralParameters | null | undefined
    ): Promise<Bundle<ExtractResource<TResource>>> {
      if (options) {
        throw new Error(
          "search#options is not supported by the MedplumClient."
        );
      }

      return client.search(type, parameters || undefined);
    },

    capabilities(): Promise<CapabilityStatement> {
      throw new Error("capabilities is not supported by the MedplumClient.");
    },

    batch(
      body: Bundle,
      options?: GeneralParameters | null | undefined
    ): Promise<Bundle> {
      if (options) {
        throw new Error("batch#options is not supported by the MedplumClient.");
      }

      return client.executeBatch(body);
    },

    async execute<TOperationResult, TOperationParameters = unknown>(
      operation: string | null | undefined,
      options?:
        | {
            type?: ResourceType | null | undefined;
            id?: string | null | undefined;
            parameters?: TOperationParameters | null | undefined;
          }
        | null
        | undefined
    ): Promise<TOperationResult> {
      if (
        operation === "$expand" &&
        options?.type === "ValueSet" &&
        isValidExpandOperationParameters(options?.parameters)
      ) {
        return await client.searchValueSet(
          options.parameters.url,
          options.parameters.filter
        );
      }

      if (
        operation === "$everything" &&
        options?.type === "Patient" &&
        options?.id
      ) {
        return (await client.readPatientEverything(
          options.id
        )) as Promise<TOperationResult>;
      }

      if (
        operation === "$graph" &&
        options?.type &&
        options?.id &&
        isValidGraphOperationParameter(options?.parameters)
      ) {
        return (await client.readResourceGraph(
          options.type,
          options.id,
          options.parameters.graph
        )) as Promise<TOperationResult>;
      }

      throw new Error(
        `The ${operation} operation (${options?.type}/${options?.id}) is not supported by the MedplumClient.`
      );
    },

    get<T = unknown>(url: URL | string): Promise<T> {
      return client.get(url);
    },
  };
}

/**
 * Parameters for the $expand operation.
 */
export interface ExpandOperationParameters {
  url: string;
  filter: string;
}

function isValidExpandOperationParameters(
  parameters: unknown
): parameters is ExpandOperationParameters {
  return (
    !!(parameters as ExpandOperationParameters)?.url &&
    !!(parameters as ExpandOperationParameters)?.filter
  );
}

/**
 * Parameters for the $graph operation.
 */
export interface GraphOperationParameters {
  graph: string;
}

function isValidGraphOperationParameter(
  parameters: unknown
): parameters is GraphOperationParameters {
  return !!(parameters as GraphOperationParameters)?.graph;
}
