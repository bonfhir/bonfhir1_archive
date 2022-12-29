import { Patient } from "fhir/r4";

export const buildPatient = (resource: Omit<Patient, "resourceType">) => ({
  ...resource,
  resourceType: "Patient",
});
