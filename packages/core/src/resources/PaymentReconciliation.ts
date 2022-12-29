import { PaymentReconciliation } from "fhir/r4";

export const buildPaymentReconciliation = (
  resource: Omit<PaymentReconciliation, "resourceType">
) => ({
  ...resource,
  resourceType: "PaymentReconciliation",
});
