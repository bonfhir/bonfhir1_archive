import { ObservationDefinition } from "fhir/r4";

export const buildObservationDefinition = (
  resource: Omit<ObservationDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "ObservationDefinition",
});
