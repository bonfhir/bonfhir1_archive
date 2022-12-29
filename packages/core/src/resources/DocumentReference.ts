import { DocumentReference } from "fhir/r4";

export const buildDocumentReference = (
  resource: Omit<DocumentReference, "resourceType">
) => ({
  ...resource,
  resourceType: "DocumentReference",
});
