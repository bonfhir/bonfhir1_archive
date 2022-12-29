import { Invoice } from "fhir/r4";

export const buildInvoice = (resource: Omit<Invoice, "resourceType">) => ({
  ...resource,
  resourceType: "Invoice",
});
