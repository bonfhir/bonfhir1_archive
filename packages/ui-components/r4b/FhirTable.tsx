/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PaginatedBundleResult } from "@bonfhir/fhir-query/r4b";
import { UseQueryResult } from "@tanstack/react-query";
import { FhirResource } from "fhir/r4";
import { ReactElement, ReactNode } from "react";
import { useFhirUIComponentsContext } from "./FhirUIComponentsContext";

export type FhirTableProps<
  PrimaryResourceType extends FhirResource,
  SecondaryResourceType extends FhirResource = PrimaryResourceType,
  TRendererProps = unknown,
  TColumnsRendererProps = unknown
> = TRendererProps & {
  columns: readonly FhirTableColumn<
    PrimaryResourceType,
    SecondaryResourceType,
    TColumnsRendererProps
  >[];
  query: UseQueryResult<
    PaginatedBundleResult<PrimaryResourceType, SecondaryResourceType>
  >;
  querySelect?:
    | ((
        queryResult: PaginatedBundleResult<
          PrimaryResourceType,
          SecondaryResourceType
        >
      ) => Array<PrimaryResourceType>)
    | null
    | undefined;
};

export type FhirTableColumn<
  PrimaryResourceType extends FhirResource,
  SecondaryResourceType extends FhirResource = PrimaryResourceType,
  TRendererProps = unknown
> = TRendererProps & {
  title: string;
  render: (
    row: PrimaryResourceType,
    index: number,
    data: PaginatedBundleResult<PrimaryResourceType, SecondaryResourceType>
  ) => ReactNode;
};

export function FhirTable<
  PrimaryResourceType extends FhirResource,
  SecondaryResourceType extends FhirResource = PrimaryResourceType,
  TRendererProps = unknown,
  TColumnsRendererProps = unknown
>(
  props: FhirTableProps<
    PrimaryResourceType,
    SecondaryResourceType,
    TRendererProps,
    TColumnsRendererProps
  >
): ReactElement | null {
  const uiContext = useFhirUIComponentsContext();

  const { columns, query, querySelect, ...rendererProps } = props;

  const data =
    query.data && querySelect
      ? querySelect(query.data)
      : query.data?.nav.searchMatch();

  return uiContext.renderer.table({
    data,
    columns: columns.map((column) => {
      const { title, render, ...columnRendererProps } = column;
      return {
        title: title,
        render: (rowIndex) =>
          render(data![rowIndex] as PrimaryResourceType, rowIndex, query.data!),
        ...columnRendererProps,
      };
    }),
    ...rendererProps,
  });
}
