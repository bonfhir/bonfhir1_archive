import { TestReport } from "fhir/r4";

export const buildTestReport = (
  resource: Omit<TestReport, "resourceType">
) => ({
  ...resource,
  resourceType: "TestReport",
});
