import { Communication } from "fhir/r4";

export const buildCommunication = (
  resource: Omit<Communication, "resourceType">
) => ({
  ...resource,
  resourceType: "Communication",
});
