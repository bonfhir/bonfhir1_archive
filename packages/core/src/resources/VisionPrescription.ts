import { VisionPrescription } from "fhir/r4";

export const buildVisionPrescription = (
  resource: Omit<VisionPrescription, "resourceType">
) => ({
  ...resource,
  resourceType: "VisionPrescription",
});
