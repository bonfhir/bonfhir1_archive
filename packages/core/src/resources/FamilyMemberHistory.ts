import { FamilyMemberHistory } from "fhir/r4";

export const buildFamilyMemberHistory = (
  resource: Omit<FamilyMemberHistory, "resourceType">
) => ({
  ...resource,
  resourceType: "FamilyMemberHistory",
});
