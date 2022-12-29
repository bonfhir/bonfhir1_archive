import { AppointmentResponse } from "fhir/r4";

export const buildAppointmentResponse = (
  resource: Omit<AppointmentResponse, "resourceType">
) => ({
  ...resource,
  resourceType: "AppointmentResponse",
});
