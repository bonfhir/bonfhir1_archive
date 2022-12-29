import { PaymentNotice } from "fhir/r4";

export const buildPaymentNotice = (
  resource: Omit<PaymentNotice, "resourceType">
) => ({
  ...resource,
  resourceType: "PaymentNotice",
});
