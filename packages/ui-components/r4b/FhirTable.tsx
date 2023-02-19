/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PaginatedBundleResult } from "@bonfhir/fhir-query/r4b";
import { UseQueryResult } from "@tanstack/react-query";
import { FhirResource } from "fhir/r4";
import { ReactElement, ReactNode, useCallback, useState } from "react";
import { useFhirUIComponentsContext } from "./FhirUIComponentsContext";

export interface UseFhirTableValue {
  pageSize: number;
  pageUrl: string | undefined;
  onPageChange: (pageUrl: string | undefined) => void;
}

export interface UseFhirTableState {
  pageUrl: string | undefined;
}

export interface UseFhirTableArgs {
  pageSize?: number | null | undefined;
  state?: ReturnType<typeof useState<UseFhirTableState>> | null | undefined;
}

export function useFhirTable(
  args?: UseFhirTableArgs | null | undefined
): UseFhirTableValue {
  const [state, setState] = args?.state
    ? args.state
    : useState<UseFhirTableState>({ pageUrl: "" });

  return {
    pageSize: args?.pageSize || 20,
    pageUrl: state?.pageUrl || undefined,
    onPageChange: (pageUrl) => {
      setState((prevState: UseFhirTableState | undefined) => ({
        ...prevState,
        pageUrl,
      }));
    },
  };
}

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
  pageSize: number;
  onPageChange?: (pageUrl: string | undefined) => void;
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

  const {
    columns,
    query,
    querySelect,
    pageSize,
    onPageChange,
    ...rendererProps
  } = props;

  const managedOnPageChange = useCallback(
    (direction: "next" | "previous") => {
      if (!onPageChange) {
        return;
      }

      switch (direction) {
        case "next":
          if (query.data?.hasNextPage) {
            onPageChange(query.data.nextPageUrl);
          }
          break;
        case "previous":
          if (query.data?.hasPreviousPage) {
            onPageChange(query.data.previousPageUrl);
          }
          break;
      }
    },
    [onPageChange]
  );

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
    pagination: {
      total: query.data?.bundle.total || 0,
      pageSize: pageSize,
      onPageChange: managedOnPageChange,
    },
    ...rendererProps,
  });
}

export type RendererTableProps<TRendererProps, TColumnRenderProps> =
  TRendererProps & {
    data: readonly unknown[] | undefined;
    columns: readonly RendererTableColum<TColumnRenderProps>[];
    pagination: RendererTablePagination;
  };

export type RendererTableColum<TRendererProps> = TRendererProps & {
  title: string;
  render: (rowIndex: number) => ReactNode;
};

export interface RendererTablePagination {
  total: number;
  pageSize: number;
  onPageChange: (direction: "next" | "previous") => void;
}
