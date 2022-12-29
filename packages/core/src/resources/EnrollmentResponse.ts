import { EnrollmentResponse } from "fhir/r4";

export const buildEnrollmentResponse = (
  resource: Omit<EnrollmentResponse, "resourceType">
) => ({
  ...resource,
  resourceType: "EnrollmentResponse",
});
