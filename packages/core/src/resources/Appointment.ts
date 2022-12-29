import { Appointment } from "fhir/r4";

export const buildAppointment = (
  resource: Omit<Appointment, "resourceType">
) => ({
  ...resource,
  resourceType: "Appointment",
});
