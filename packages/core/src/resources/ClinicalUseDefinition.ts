import { ClinicalUseDefinition } from "fhir/r4";

export const buildClinicalUseDefinition = (
  resource: Omit<ClinicalUseDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "ClinicalUseDefinition",
});
