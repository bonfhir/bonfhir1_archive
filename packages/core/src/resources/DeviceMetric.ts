import { DeviceMetric } from "fhir/r4";

export const buildDeviceMetric = (
  resource: Omit<DeviceMetric, "resourceType">
) => ({
  ...resource,
  resourceType: "DeviceMetric",
});
