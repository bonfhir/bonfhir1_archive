export const AssertionDirectionType = {
  resourceType: "CodeSystem",
  id: "assert-direction-codes",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>AssertionDirectionType</h2>\n      \n      <div>\n        \n        <p>The type of direction to use for assertion.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/assert-direction-codes defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">response\n            \n            <a name="assert-direction-codes-response"> </a>\n          \n          </td>\n          \n          <td>response</td>\n          \n          <td>The assertion is evaluated on the response. This is the default value.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">request\n            \n            <a name="assert-direction-codes-request"> </a>\n          \n          </td>\n          \n          <td>request</td>\n          \n          <td>The assertion is evaluated on the request.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/assert-direction-codes",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.707",
    },
  ],
  version: "4.3.0",
  name: "AssertionDirectionType",
  title: "AssertionDirectionType",
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
  description: "The type of direction to use for assertion.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/assert-direction-codes",
  content: "complete",
  concept: [
    {
      code: "response",
      display: "response",
      definition:
        "The assertion is evaluated on the response. This is the default value.",
    },
    {
      code: "request",
      display: "request",
      definition: "The assertion is evaluated on the request.",
    },
  ],
};
