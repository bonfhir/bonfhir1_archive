import { Observation } from "fhir/r4";

export const buildObservation = (
  resource: Omit<Observation, "resourceType">
) => ({
  ...resource,
  resourceType: "Observation",
});
