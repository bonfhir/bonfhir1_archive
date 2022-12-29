import { EvidenceReport } from "fhir/r4";

export const buildEvidenceReport = (
  resource: Omit<EvidenceReport, "resourceType">
) => ({
  ...resource,
  resourceType: "EvidenceReport",
});
