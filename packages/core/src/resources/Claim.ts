import { Claim } from "fhir/r4";

export const buildClaim = (resource: Omit<Claim, "resourceType">) => ({
  ...resource,
  resourceType: "Claim",
});
