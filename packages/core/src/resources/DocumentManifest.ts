import { DocumentManifest } from "fhir/r4";

export const buildDocumentManifest = (
  resource: Omit<DocumentManifest, "resourceType">
) => ({
  ...resource,
  resourceType: "DocumentManifest",
});
