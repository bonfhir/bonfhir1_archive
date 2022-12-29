import { EvidenceVariable } from "fhir/r4";

export const buildEvidenceVariable = (
  resource: Omit<EvidenceVariable, "resourceType">
) => ({
  ...resource,
  resourceType: "EvidenceVariable",
});
