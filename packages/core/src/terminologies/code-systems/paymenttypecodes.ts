export const PaymentTypeCodes = {
  resourceType: "CodeSystem",
  id: "payment-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/payment-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">payment<a name="payment-type-payment"> </a></td><td>Payment</td><td>The amount is partial or complete settlement of the amounts due.</td></tr><tr><td style="white-space:nowrap">adjustment<a name="payment-type-adjustment"> </a></td><td>Adjustment</td><td>The amount is an adjustment regarding claims already paid.</td></tr><tr><td style="white-space:nowrap">advance<a name="payment-type-advance"> </a></td><td>Advance</td><td>The amount is an advance against future claims.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/payment-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1186",
    },
  ],
  version: "4.3.0",
  name: "PaymentTypeCodes",
  title: "Payment Type Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Payment Type codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "payment",
      display: "Payment",
      definition:
        "The amount is partial or complete settlement of the amounts due.",
    },
    {
      code: "adjustment",
      display: "Adjustment",
      definition: "The amount is an adjustment regarding claims already paid.",
    },
    {
      code: "advance",
      display: "Advance",
      definition: "The amount is an advance against future claims.",
    },
  ],
};
