import { ClaimResponse } from "fhir/r4";

export const buildClaimResponse = (
  resource: Omit<ClaimResponse, "resourceType">
) => ({
  ...resource,
  resourceType: "ClaimResponse",
});
