import { DeviceRequest } from "fhir/r4";

export const buildDeviceRequest = (
  resource: Omit<DeviceRequest, "resourceType">
) => ({
  ...resource,
  resourceType: "DeviceRequest",
});
