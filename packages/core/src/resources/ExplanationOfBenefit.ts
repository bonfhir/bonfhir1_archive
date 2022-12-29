import { ExplanationOfBenefit } from "fhir/r4";

export const buildExplanationOfBenefit = (
  resource: Omit<ExplanationOfBenefit, "resourceType">
) => ({
  ...resource,
  resourceType: "ExplanationOfBenefit",
});
