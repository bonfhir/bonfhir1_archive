import { Schedule } from "fhir/r4";

export const buildSchedule = (resource: Omit<Schedule, "resourceType">) => ({
  ...resource,
  resourceType: "Schedule",
});
