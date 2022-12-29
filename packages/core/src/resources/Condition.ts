import { Condition } from "fhir/r4";

export const buildCondition = (resource: Omit<Condition, "resourceType">) => ({
  ...resource,
  resourceType: "Condition",
});
