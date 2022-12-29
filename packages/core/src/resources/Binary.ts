import { Binary } from "fhir/r4";

export const buildBinary = (resource: Omit<Binary, "resourceType">) => ({
  ...resource,
  resourceType: "Binary",
});
