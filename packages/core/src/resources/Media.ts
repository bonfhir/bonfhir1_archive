import { Media } from "fhir/r4";

export const buildMedia = (resource: Omit<Media, "resourceType">) => ({
  ...resource,
  resourceType: "Media",
});
