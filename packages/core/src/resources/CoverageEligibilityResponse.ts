import { CoverageEligibilityResponse } from "fhir/r4";

export const buildCoverageEligibilityResponse = (
  resource: Omit<CoverageEligibilityResponse, "resourceType">
) => ({
  ...resource,
  resourceType: "CoverageEligibilityResponse",
});
