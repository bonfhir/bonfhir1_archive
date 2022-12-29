import { Specimen } from "fhir/r4";

export const buildSpecimen = (resource: Omit<Specimen, "resourceType">) => ({
  ...resource,
  resourceType: "Specimen",
});
