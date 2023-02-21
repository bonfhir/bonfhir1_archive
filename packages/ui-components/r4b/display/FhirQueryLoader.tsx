import { UseQueryResult } from "@tanstack/react-query";
import isEmpty from "lodash/isEmpty";
import { PropsWithChildren, ReactElement } from "react";
import { useFhirUIComponentsContext } from "../FhirUIComponentsContext";

export type FhirQueryLoaderProps<
  TData = unknown,
  TError = unknown,
  TLoaderProps = unknown,
  TErrorPanelProps = unknown,
  TEmptyProps = unknown
> = PropsWithChildren<{
  query: UseQueryResult<TData, TError>;
  emptyProps?: TEmptyProps | null | undefined;
  errorPanelProps?: TErrorPanelProps | null | undefined;
  loaderProps?: TLoaderProps | null | undefined;
}>;

export function FhirQueryLoader<
  TData = unknown,
  TError = unknown,
  TLoaderProps = unknown,
  TErrorPanelProps = unknown,
  TEmptyProps = unknown
>({
  query,
  emptyProps,
  errorPanelProps,
  loaderProps,
  children,
}: FhirQueryLoaderProps<
  TData,
  TError,
  TLoaderProps,
  TErrorPanelProps,
  TEmptyProps
>): ReactElement | null {
  const { renderer } = useFhirUIComponentsContext();

  if (query.isError) {
    return renderer.errorPanel({ error: query.error, ...errorPanelProps });
  }

  if (query.isInitialLoading) {
    return renderer.loader(loaderProps);
  }

  if (
    emptyProps &&
    !query.isError &&
    !query.isInitialLoading &&
    isEmpty(query.data)
  ) {
    return renderer.empty(emptyProps);
  }

  return <>{children}</>;
}
