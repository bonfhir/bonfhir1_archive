import { ClinicalImpression } from "fhir/r4";

export const buildClinicalImpression = (
  resource: Omit<ClinicalImpression, "resourceType">
) => ({
  ...resource,
  resourceType: "ClinicalImpression",
});
