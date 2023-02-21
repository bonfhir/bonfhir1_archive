import {
  FhirDataTypeAdapter,
  ValueSetExpandOperationResult,
} from "@bonfhir/core/r4b";
import { UseQueryResult } from "@tanstack/react-query";
import { ReactElement } from "react";
import { FhirValueProps } from "./display";

/**
 * Renderer interface for FHIR UI Components.
 *
 * The actual rendering on-screen is delegated to implementations of this interface.
 */
export interface FhirUIComponentsRenderer {
  /**
   * Renderer to display a empty error message.
   */
  empty: <TRendererProps = unknown>(
    props: TRendererProps
  ) => ReactElement | null;

  /**
   * Renderer to display a panel showing an unexpected/technical error.
   */
  errorPanel: <TRendererProps = unknown>(
    props: ErrorPanelProps<TRendererProps>
  ) => ReactElement | null;

  /**
   * Renderer to display a panel showing an unexpected/technical error.
   */
  loader: <TRendererProps = unknown>(
    props: TRendererProps
  ) => ReactElement | null;

  /**
   * Renderer used to render <FhirValue />.
   * This one is optional - <FhirValue /> will renderer to a string if not provided.
   */
  value?:
    | (<TRendererProps = unknown>(
        props: ValueRendererProps<TRendererProps>
      ) => ReactElement | null)
    | null
    | undefined;
}

export type ErrorPanelProps<TRendererProps = unknown> = TRendererProps & {
  error: unknown;
};

export type ValueRendererProps<TRendererProps = unknown> = TRendererProps &
  FhirValueProps & {
    /**
     * The current {@link FhirDataTypeAdapter} configured in the context.
     */
    dataTypeAdapter: FhirDataTypeAdapter;

    /**
     * The ValueSet expansion query, if the `valueSetExpand` option was passed to <FhirValue />
     */
    valueSetExpandQuery: UseQueryResult<ValueSetExpandOperationResult>;

    /**
     * The formatted string using the options, if you want to use it directly.
     */
    formatted: string;
  };
