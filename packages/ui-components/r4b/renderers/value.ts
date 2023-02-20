import {
  FhirDataTypeAdapter,
  ValueSetExpandOperationResult,
} from "@bonfhir/core/r4b";
import { UseQueryResult } from "@tanstack/react-query";
import { ReactElement } from "react";
import { FhirValueProps } from "../data-types";

export type ValueRendererProps = FhirValueProps & {
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

export type ValueRenderer = (props: ValueRendererProps) => ReactElement | null;
