import { CarePlan } from "fhir/r4";

export const buildCarePlan = (resource: Omit<CarePlan, "resourceType">) => ({
  ...resource,
  resourceType: "CarePlan",
});
