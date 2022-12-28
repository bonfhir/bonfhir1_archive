export const EligibilityResponsePurpose = {
  resourceType: "CodeSystem",
  id: "eligibilityresponse-purpose",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>EligibilityResponsePurpose</h2>\n      \n      <div>\n        \n        <p>A code specifying the types of information being requested.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/eligibilityresponse-purpose defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">auth-requirements\n            \n            <a name="eligibilityresponse-purpose-auth-requirements"> </a>\n          \n          </td>\n          \n          <td>Coverage auth-requirements</td>\n          \n          <td>The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">benefits\n            \n            <a name="eligibilityresponse-purpose-benefits"> </a>\n          \n          </td>\n          \n          <td>Coverage benefits</td>\n          \n          <td>The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">discovery\n            \n            <a name="eligibilityresponse-purpose-discovery"> </a>\n          \n          </td>\n          \n          <td>Coverage Discovery</td>\n          \n          <td>The insurer is requested to report on any coverages which they are aware of in addition to any specifed.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">validation\n            \n            <a name="eligibilityresponse-purpose-validation"> </a>\n          \n          </td>\n          \n          <td>Coverage Validation</td>\n          \n          <td>A check that the specified coverages are in-force is requested.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/eligibilityresponse-purpose",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1185",
    },
  ],
  version: "4.3.0",
  name: "EligibilityResponsePurpose",
  title: "EligibilityResponsePurpose",
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
  description: "A code specifying the types of information being requested.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/eligibilityresponse-purpose",
  content: "complete",
  concept: [
    {
      code: "auth-requirements",
      display: "Coverage auth-requirements",
      definition:
        "The prior authorization requirements for the listed, or discovered if specified, converages for the categories of service and/or specifed biling codes are requested.",
    },
    {
      code: "benefits",
      display: "Coverage benefits",
      definition:
        "The plan benefits and optionally benefits consumed  for the listed, or discovered if specified, converages are requested.",
    },
    {
      code: "discovery",
      display: "Coverage Discovery",
      definition:
        "The insurer is requested to report on any coverages which they are aware of in addition to any specifed.",
    },
    {
      code: "validation",
      display: "Coverage Validation",
      definition:
        "A check that the specified coverages are in-force is requested.",
    },
  ],
};
