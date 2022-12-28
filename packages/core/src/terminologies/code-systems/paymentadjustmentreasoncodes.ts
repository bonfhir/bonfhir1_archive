/**
 * This value set includes smattering of Payment Adjustment Reason codes.
 * http://terminology.hl7.org/CodeSystem/payment-adjustment-reason
 */
export const PaymentAdjustmentReasonCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "payment-adjustment-reason",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/payment-adjustment-reason defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">a001<a name="payment-adjustment-reason-a001"> </a></td><td>Prior Payment Reversal</td><td>Prior Payment Reversal</td></tr><tr><td style="white-space:nowrap">a002<a name="payment-adjustment-reason-a002"> </a></td><td>Prior Overpayment</td><td>Prior Overpayment</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/payment-adjustment-reason",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1173",
    },
  ],
  version: "4.3.0",
  name: "PaymentAdjustmentReasonCodes",
  title: "Payment Adjustment Reason Codes",
  status: "draft",
  experimental: false,
  description:
    "This value set includes smattering of Payment Adjustment Reason codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "a001",
      display: "Prior Payment Reversal",
      definition: "Prior Payment Reversal",
    },
    {
      code: "a002",
      display: "Prior Overpayment",
      definition: "Prior Overpayment",
    },
  ],
};
