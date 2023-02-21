import { EmptyProps } from "@bonfhir/ui-components/r4b";
import { Empty as AntdEmpty, EmptyProps as AntdEmptyProps } from "antd";
import { ReactElement } from "react";

export function empty(props: EmptyProps<AntdEmptyProps>): ReactElement | null {
  return <AntdEmpty {...props} />;
}
