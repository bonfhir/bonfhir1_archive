import { CatalogEntry } from "fhir/r4";

export const buildCatalogEntry = (
  resource: Omit<CatalogEntry, "resourceType">
) => ({
  ...resource,
  resourceType: "CatalogEntry",
});
