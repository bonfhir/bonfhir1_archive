import { Device } from "fhir/r4";

export const buildDevice = (resource: Omit<Device, "resourceType">) => ({
  ...resource,
  resourceType: "Device",
});
