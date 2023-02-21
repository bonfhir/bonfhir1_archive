import { LoaderProps } from "@bonfhir/ui-components/r4b";
import { Spin as AntdSpin, SpinProps as AntdSpinProps } from "antd";
import { ReactElement } from "react";

export function loader(props: LoaderProps<AntdSpinProps>): ReactElement | null {
  return <AntdSpin {...props} />;
}
