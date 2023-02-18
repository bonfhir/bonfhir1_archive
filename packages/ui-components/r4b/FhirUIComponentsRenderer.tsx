import { ValueSetExpansionContains } from "fhir/r4";
import { ReactElement, ReactNode } from "react";

export interface FhirUIComponentsRenderer {
  select<TRendererProps = unknown>(
    props: SelectProps<TRendererProps>
  ): ReactElement | null;

  table<TRendererProps = unknown, TColumnRenderProps = unknown>(
    props: TableProps<TRendererProps, TColumnRenderProps>
  ): ReactElement | null;
}

export interface SelectItem {
  value: string;
  label: string;
  fhirValue: ValueSetExpansionContains;
}

export type SelectProps<TRendererProps> = TRendererProps & {
  value: string;
  items: SelectItem[];
  onChange: (value: string) => void;
  loading: boolean;
};

export type TableProps<TRendererProps, TColumnRenderProps> = TRendererProps & {
  data: readonly unknown[] | undefined;
  columns: readonly TableColum<TColumnRenderProps>[];
};

export type TableColum<TRendererProps> = TRendererProps & {
  title: string;
  render: (rowIndex: number) => ReactNode;
};
