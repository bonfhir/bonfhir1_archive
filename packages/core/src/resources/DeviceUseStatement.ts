import { DeviceUseStatement } from "fhir/r4";

export const buildDeviceUseStatement = (
  resource: Omit<DeviceUseStatement, "resourceType">
) => ({
  ...resource,
  resourceType: "DeviceUseStatement",
});
