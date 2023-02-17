import { ValueSetExpansionContains } from "fhir/r4";
import { ReactElement } from "react";

export interface FhirUIComponentsRenderer {
  select<TRendererProps = unknown>(
    props: SelectProps<TRendererProps>
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
