import { ImagingStudy } from "fhir/r4";

export const buildImagingStudy = (
  resource: Omit<ImagingStudy, "resourceType">
) => ({
  ...resource,
  resourceType: "ImagingStudy",
});
