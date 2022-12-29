import { Slot } from "fhir/r4";

export const buildSlot = (resource: Omit<Slot, "resourceType">) => ({
  ...resource,
  resourceType: "Slot",
});
