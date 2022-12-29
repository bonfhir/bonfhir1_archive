import { EnrollmentRequest } from "fhir/r4";

export const buildEnrollmentRequest = (
  resource: Omit<EnrollmentRequest, "resourceType">
) => ({
  ...resource,
  resourceType: "EnrollmentRequest",
});
