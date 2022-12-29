import { CoverageEligibilityRequest } from "fhir/r4";

export const buildCoverageEligibilityRequest = (
  resource: Omit<CoverageEligibilityRequest, "resourceType">
) => ({
  ...resource,
  resourceType: "CoverageEligibilityRequest",
});
