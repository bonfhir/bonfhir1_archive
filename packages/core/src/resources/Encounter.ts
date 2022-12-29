import { Encounter } from "fhir/r4";

export const buildEncounter = (resource: Omit<Encounter, "resourceType">) => ({
  ...resource,
  resourceType: "Encounter",
});
