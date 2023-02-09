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
import type { MedplumClient } from "@medplum/core";
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
          options.parameters.filter ?? ""
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

function isNil(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function containsNonWhitespace(value: string): boolean {
  return !!value.trim();
}

/**
 * Parameters for the `$expand` operation.
 *
 * @see https://www.hl7.org/fhir/valueset-operation-expand.html
 */
export interface ExpandOperationParameters {
  /**
   * A canonical reference to a value set. The server must know the value set
   * (e.g. it is defined explicitly in the server's value sets, or it is defined
   * implicitly by some code system known to the server.
   */
  url: string;

  /**
   * A text filter that is applied to restrict the codes that are returned (this
   * is useful in a UI context). The interpretation of this is delegated to the
   * server in order to allow to determine the most optimal search approach for
   * the context. The server can document the way this parameter works in
   * [TerminologyCapabilities][0]..expansion.textFilter. Typical usage of this
   * parameter includes functionality like:
   * - using left matching e.g. "acut ast"
   * - allowing for wild cards such as %, &, ?
   * - searching on definition as well as display(s)
   * - allowing for search conditions (and / or / exclusions)
   *
   * Text Search engines such as Lucene or Solr, long with their considerable
   * functionality, might also be used. The optional text search might also be
   * code system specific, and servers might have different implementations for
   * different code systems.
   *
   * [0]: https://www.hl7.org/fhir/terminologycapabilities.html
   */
  filter?: string | null | undefined;
}

/** Are the given `parameters` valid {@link ExpandOperationParameters}? */
function isValidExpandOperationParameters(
  parameters: unknown
): parameters is ExpandOperationParameters {
  return (
    isObject(parameters) &&
    isString(parameters.url) &&
    containsNonWhitespace(parameters.url) &&
    (isNil(parameters.filter) || isString(parameters.filter))
  );
}

/**
 * Parameters for the `$graph` operation.
 *
 * @see https://www.hl7.org/fhir/resource-operation-graph.html
 */
export interface GraphOperationParameters {
  /**
   * Servers MAY choose to allow any graph definition to be specified, but MAY
   * require that the client choose a graph definition from a specific list of
   * known supported definitions. The server is not required to support a formal
   * definition of the graph on the end point.
   */
  graph: string;
}

/** Are the given `parameters` valid {@link GraphOperationParameters}? */
function isValidGraphOperationParameter(
  parameters: unknown
): parameters is GraphOperationParameters {
  return (
    isObject(parameters) &&
    isString(parameters.graph) &&
    containsNonWhitespace(parameters.graph)
  );
}
