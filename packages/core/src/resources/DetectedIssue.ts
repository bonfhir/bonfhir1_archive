import { DetectedIssue } from "fhir/r4";

export const buildDetectedIssue = (
  resource: Omit<DetectedIssue, "resourceType">
) => ({
  ...resource,
  resourceType: "DetectedIssue",
});
