import { ImmunizationRecommendation } from "fhir/r4";

export const buildImmunizationRecommendation = (
  resource: Omit<ImmunizationRecommendation, "resourceType">
) => ({
  ...resource,
  resourceType: "ImmunizationRecommendation",
});
