export const PaymentStatusCodes = {
  resourceType: "CodeSystem",
  id: "payment-status",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/paymentstatus defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">paid<a name="payment-status-paid"> </a></td><td>Paid</td><td>The payment has been sent physically or electronically.</td></tr><tr><td style="white-space:nowrap">cleared<a name="payment-status-cleared"> </a></td><td>Cleared</td><td>The payment has been received by the payee.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/paymentstatus",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1187",
    },
  ],
  version: "4.3.0",
  name: "PaymentStatusCodes",
  title: "Payment Status Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes a sample set of Payment Status codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "paid",
      display: "Paid",
      definition: "The payment has been sent physically or electronically.",
    },
    {
      code: "cleared",
      display: "Cleared",
      definition: "The payment has been received by the payee.",
    },
  ],
};
