import {
  ConcurrencyParameters,
  ConditionalSearchParameters,
  ExtractResource,
  FhirRestfulClient,
  GeneralParameters,
  HistoryParameters,
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
  client: MedplumClient,
  logger?: (
    action: keyof FhirRestfulClient,
    args: unknown,
    result: unknown
  ) => void | Promise<void>
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

      const result = await client.readResource(type, id);
      await logger?.("read", { type, id, options }, result);
      return result;
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

      const result = await client.readVersion(type, id, vid);
      await logger?.("vread", { type, id, vid, options }, result);
      return result;
    },

    async update<TResource extends FhirResource>(
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

      const result = await client.updateResource(body);
      await logger?.("update", { body, options }, result);
      return result;
    },

    async patch<TResource extends ResourceType>(
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

      const result = await client.patchResource(type, id, body);
      await logger?.("patch", { type, id, body, options }, result);
      return result;
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

      await client.deleteResource(type, id);
      await logger?.("delete", { type, id, options }, undefined);
    },

    async history<TResource extends ResourceType>(
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

      const result = await client.readHistory(type, id);
      await logger?.("history", { type, id, options }, result);
      return result;
    },

    async create<TResource extends FhirResource>(
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

      const result = await client.createResource(body);
      await logger?.("create", { body, options }, result);
      return result;
    },

    async search<TResource extends ResourceType>(
      type?: TResource | null | undefined,
      parameters?: string | null | undefined,
      options?: GeneralParameters | null | undefined
    ): Promise<Bundle<ExtractResource<TResource>>> {
      if (options) {
        throw new Error(
          "search#options is not supported by the MedplumClient."
        );
      }

      const result = await client.search(type, parameters || undefined);
      await logger?.("search", { type, parameters, options }, result);
      return result;
    },

    capabilities(): Promise<CapabilityStatement> {
      throw new Error("capabilities is not supported by the MedplumClient.");
    },

    async batch(
      body: Bundle,
      options?: GeneralParameters | null | undefined
    ): Promise<Bundle> {
      if (options) {
        throw new Error("batch#options is not supported by the MedplumClient.");
      }

      const result = await client.executeBatch(body);
      await logger?.("batch", { body }, result);
      return result;
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
        const result = await client.searchValueSet(
          options.parameters.url,
          options.parameters.filter
        );
        await logger?.("execute", { operation, options }, result);
        return result;
      }

      if (
        operation === "$everything" &&
        options?.type === "Patient" &&
        options?.id
      ) {
        const result = (await client.readPatientEverything(
          options.id
        )) as Promise<TOperationResult>;
        await logger?.("execute", { operation, options }, result);
        return result;
      }

      if (
        operation === "$graph" &&
        options?.type &&
        options?.id &&
        isValidGraphOperationParameter(options?.parameters)
      ) {
        const result = (await client.readResourceGraph(
          options.type,
          options.id,
          options.parameters.graph
        )) as Promise<TOperationResult>;
        await logger?.("execute", { operation, options }, result);
        return result;
      }

      throw new Error(
        `The ${operation} operation (${options?.type}/${options?.id}) is not supported by the MedplumClient.`
      );
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
