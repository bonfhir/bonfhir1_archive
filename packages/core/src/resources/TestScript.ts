import { TestScript } from "fhir/r4";

export const buildTestScript = (
  resource: Omit<TestScript, "resourceType">
) => ({
  ...resource,
  resourceType: "TestScript",
});
