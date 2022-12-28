export const InvoiceStatus = {
  resourceType: "CodeSystem",
  id: "invoice-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>InvoiceStatus</h2>\n      \n      <div>\n        \n        <p>Codes identifying the lifecycle stage of an Invoice.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/invoice-status defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">draft\n            \n            <a name="invoice-status-draft"> </a>\n          \n          </td>\n          \n          <td>draft</td>\n          \n          <td>the invoice has been prepared but not yet finalized.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">issued\n            \n            <a name="invoice-status-issued"> </a>\n          \n          </td>\n          \n          <td>issued</td>\n          \n          <td>the invoice has been finalized and sent to the recipient.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">balanced\n            \n            <a name="invoice-status-balanced"> </a>\n          \n          </td>\n          \n          <td>balanced</td>\n          \n          <td>the invoice has been balaced / completely paid.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">cancelled\n            \n            <a name="invoice-status-cancelled"> </a>\n          \n          </td>\n          \n          <td>cancelled</td>\n          \n          <td>the invoice was cancelled.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">entered-in-error\n            \n            <a name="invoice-status-entered-in-error"> </a>\n          \n          </td>\n          \n          <td>entered in error</td>\n          \n          <td>the invoice was determined as entered in error before it was issued.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 0,
    },
  ],
  url: "http://hl7.org/fhir/invoice-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.867",
    },
  ],
  version: "4.3.0",
  name: "InvoiceStatus",
  title: "InvoiceStatus",
  status: "draft",
  experimental: false,
  date: "2021-01-17T07:06:13+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "Codes identifying the lifecycle stage of an Invoice.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/invoice-status",
  content: "complete",
  concept: [
    {
      code: "draft",
      display: "draft",
      definition: "the invoice has been prepared but not yet finalized.",
    },
    {
      code: "issued",
      display: "issued",
      definition: "the invoice has been finalized and sent to the recipient.",
    },
    {
      code: "balanced",
      display: "balanced",
      definition: "the invoice has been balaced / completely paid.",
    },
    {
      code: "cancelled",
      display: "cancelled",
      definition: "the invoice was cancelled.",
    },
    {
      code: "entered-in-error",
      display: "entered in error",
      definition:
        "the invoice was determined as entered in error before it was issued.",
    },
  ],
};
