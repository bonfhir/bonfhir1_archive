import { EpisodeOfCare } from "fhir/r4";

export const buildEpisodeOfCare = (
  resource: Omit<EpisodeOfCare, "resourceType">
) => ({
  ...resource,
  resourceType: "EpisodeOfCare",
});
