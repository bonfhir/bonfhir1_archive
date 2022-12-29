import { DiagnosticReport } from "fhir/r4";

export const buildDiagnosticReport = (
  resource: Omit<DiagnosticReport, "resourceType">
) => ({
  ...resource,
  resourceType: "DiagnosticReport",
});
