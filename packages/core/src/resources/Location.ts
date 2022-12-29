import { Location } from "fhir/r4";

export const buildLocation = (resource: Omit<Location, "resourceType">) => ({
  ...resource,
  resourceType: "Location",
});
