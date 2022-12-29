import { RiskAssessment } from "fhir/r4";

export const buildRiskAssessment = (
  resource: Omit<RiskAssessment, "resourceType">
) => ({
  ...resource,
  resourceType: "RiskAssessment",
});
