export const SupplyRequestReason = {
  resourceType: "CodeSystem",
  id: "supplyrequest-reason",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>SupplyRequestReason</h2>\n      \n      <div>\n        \n        <p>The reason why the supply item was requested.</p>\n\n      \n      </div>\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/supplyrequest-reason defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">patient-care\n            \n            <a name="supplyrequest-reason-patient-care"> </a>\n          \n          </td>\n          \n          <td>Patient Care</td>\n          \n          <td>The supply has been requested for use in direct patient care.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ward-stock\n            \n            <a name="supplyrequest-reason-ward-stock"> </a>\n          \n          </td>\n          \n          <td>Ward Stock</td>\n          \n          <td>The supply has been requested for creating or replenishing ward stock.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/supplyrequest-reason",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1193",
    },
  ],
  version: "4.3.0",
  name: "SupplyRequestReason",
  title: "SupplyRequestReason",
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
  description: "The reason why the supply item was requested.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/supplyrequest-reason",
  content: "complete",
  concept: [
    {
      code: "patient-care",
      display: "Patient Care",
      definition:
        "The supply has been requested for use in direct patient care.",
    },
    {
      code: "ward-stock",
      display: "Ward Stock",
      definition:
        "The supply has been requested for creating or replenishing ward stock.",
    },
  ],
};
