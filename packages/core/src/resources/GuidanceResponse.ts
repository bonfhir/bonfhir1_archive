import { GuidanceResponse } from "fhir/r4";

export const buildGuidanceResponse = (
  resource: Omit<GuidanceResponse, "resourceType">
) => ({
  ...resource,
  resourceType: "GuidanceResponse",
});
