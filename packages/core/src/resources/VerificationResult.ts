import { VerificationResult } from "fhir/r4";

export const buildVerificationResult = (
  resource: Omit<VerificationResult, "resourceType">
) => ({
  ...resource,
  resourceType: "VerificationResult",
});
