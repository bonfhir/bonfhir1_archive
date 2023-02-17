import { SelectProps } from "@bonfhir/ui-components/r4b";
import { Select, SelectProps as FullAntdSelectProps } from "antd";
import { ReactElement } from "react";

export type AntdSelectProps = Omit<
  FullAntdSelectProps,
  "value" | "options" | "onChange" | "loading"
>;

export function AntdSelect(
  props: SelectProps<AntdSelectProps>
): ReactElement | null {
  const { value, items, onChange, loading, ...selectProps } = props;

  console.log({ value });

  return (
    <Select
      value={value}
      options={items}
      onChange={onChange}
      loading={loading}
      {...selectProps}
    ></Select>
  );
}
