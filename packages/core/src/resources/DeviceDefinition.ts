import { DeviceDefinition } from "fhir/r4";

export const buildDeviceDefinition = (
  resource: Omit<DeviceDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "DeviceDefinition",
});
