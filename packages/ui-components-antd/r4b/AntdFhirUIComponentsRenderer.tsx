import { FhirUIComponentsRenderer } from "@bonfhir/ui-components/r4b";
import { AntdSelect } from "./AntdSelect";

export const antdFhirUIComponentsRenderer = (): FhirUIComponentsRenderer => ({
  select: AntdSelect,
});
