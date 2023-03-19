import { ErrorPanelProps } from "@bonfhir/ui-components/r4b";
import { Alert as AntdAlert, AlertProps as AntdAlertProps } from "antd";
import { ReactElement } from "react";

export function errorPanel({
  error,
  ...rendererProps
}: ErrorPanelProps<AntdAlertProps>): ReactElement | null {
  const errorMessage =
    (error instanceof Error ? error.message : error?.toString()) ||
    "Unknown error";

  return <AntdAlert type="error" message={errorMessage} {...rendererProps} />;
}
