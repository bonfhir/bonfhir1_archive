import { CareTeam } from "fhir/r4";

export const buildCareTeam = (resource: Omit<CareTeam, "resourceType">) => ({
  ...resource,
  resourceType: "CareTeam",
});
