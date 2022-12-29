import { AdverseEvent } from "fhir/r4";

export const buildAdverseEvent = (
  resource: Omit<AdverseEvent, "resourceType">
) => ({
  ...resource,
  resourceType: "AdverseEvent",
});
