import { FhirUIComponentsRenderer } from "@bonfhir/ui-components/r4b";
import { AntdSelect } from "./AntdSelect";
import { AntdTable } from "./AntdTable";

export const antdFhirUIComponentsRenderer = (): FhirUIComponentsRenderer => ({
  select: AntdSelect,
  table: AntdTable,
});
