import { FhirRestfulClient } from "@bonfhir/core/r4b";
import {
  QueryClient,
  QueryClientConfig,
  QueryClientProvider,
} from "@tanstack/react-query";
import { PropsWithChildren, useMemo } from "react";
import { FhirQueryContext } from "./fhir-query-context";

export type FhirQueryProviderProps = PropsWithChildren<
  {
    /**
     * The {@link FhirRestfulClient} to make FHIR HTTP requests.
     */
    fhirClient: FhirRestfulClient;

    /**
     * Set to `false` to disable default cache invalidation / optimization strategies implemented in default hooks.
     */
    manageCache?: boolean | null | undefined;
  } & (
    | {
        /**
         * An existing {@link QueryClient} instance to use. If none is provided, a default instance is created
         * and managed automatically.
         */
        queryClient?: QueryClient | null | undefined;
      }
    | {
        /**
         * Any custom {@link QueryClientConfig} configuration options to use.
         */
        queryClientConfig?: QueryClientConfig | null | undefined;
      }
  )
>;

/**
 * Provide a context for fhir-query hooks.
 * Should probably be placed near the top of your React app render tree.
 */
export function FhirQueryProvider(props: FhirQueryProviderProps) {
  const manageCache = props.manageCache == null || props.manageCache;
  if (hasQueryClient(props)) {
    return (
      <FhirQueryContext.Provider
        value={{
          fhirClient: props.fhirClient,
          queryClient: props.queryClient,
          manageCache,
        }}
      >
        {props.children}
      </FhirQueryContext.Provider>
    );
  }

  const queryClient = useMemo(
    () =>
      new QueryClient(
        hasQueryClientConfig(props) ? props.queryClientConfig : undefined
      ),
    []
  );

  return (
    <QueryClientProvider client={queryClient}>
      <FhirQueryContext.Provider
        value={{
          fhirClient: props.fhirClient,
          queryClient,
          manageCache: manageCache,
        }}
      >
        {props.children}
      </FhirQueryContext.Provider>
    </QueryClientProvider>
  );
}

function hasQueryClient(
  value: FhirQueryProviderProps
): value is FhirQueryProviderProps & { queryClient: QueryClient } {
  return !!(value as { queryClient: QueryClient }).queryClient;
}

function hasQueryClientConfig(
  value: FhirQueryProviderProps
): value is FhirQueryProviderProps & { queryClientConfig: QueryClientConfig } {
  return !!(value as { queryClientConfig: QueryClientConfig })
    .queryClientConfig;
}
