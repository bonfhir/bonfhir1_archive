import {
  EmptyProps,
  ErrorPanelProps,
  FhirUIComponentsRenderer,
  LoaderProps,
} from "@bonfhir/ui-components/r4b";
import { AlertProps, EmptyProps as AntdEmptyProps, SpinProps } from "antd";
import { empty } from "./empty";
import { errorPanel } from "./error-panel";
import { loader } from "./loader";

export const antdFhirUIComponentsRenderer = (): FhirUIComponentsRenderer => ({
  empty: (props) => empty(props as EmptyProps<AntdEmptyProps>),

  errorPanel: (props) => errorPanel(props as ErrorPanelProps<AlertProps>),

  loader: (props) => loader(props as LoaderProps<SpinProps>),
});
