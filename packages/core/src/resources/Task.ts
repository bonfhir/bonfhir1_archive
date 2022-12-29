import { Task } from "fhir/r4";

export const buildTask = (resource: Omit<Task, "resourceType">) => ({
  ...resource,
  resourceType: "Task",
});
