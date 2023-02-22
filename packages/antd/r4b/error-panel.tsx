import { ErrorPanelProps } from "@bonfhir/ui-components/r4b";
import { Alert as AntdAlert, AlertProps as AntdAlertProps } from "antd";
import isError from "lodash/isError";
import { ReactElement } from "react";

export function errorPanel({
  error,
  ...rendererProps
}: ErrorPanelProps<AntdAlertProps>): ReactElement | null {
  const errorMessage =
    (isError(error) ? error.message : error?.toString()) || "Unknown error";

  return <AntdAlert type="error" message={errorMessage} {...rendererProps} />;
}
