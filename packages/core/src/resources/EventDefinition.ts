import { EventDefinition } from "fhir/r4";

export const buildEventDefinition = (
  resource: Omit<EventDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "EventDefinition",
});
