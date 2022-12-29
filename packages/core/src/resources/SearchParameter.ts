import { SearchParameter } from "fhir/r4";

export const buildSearchParameter = (
  resource: Omit<SearchParameter, "resourceType">
) => ({
  ...resource,
  resourceType: "SearchParameter",
});
