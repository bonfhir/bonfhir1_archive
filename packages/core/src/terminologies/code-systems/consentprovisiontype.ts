export const ConsentProvisionType = {
  resourceType: "CodeSystem",
  id: "consent-provision-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>ConsentProvisionType</h2>\n      \n      <div>\n        \n        <p>How a rule statement is applied, such as adding additional consent or removing consent.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/consent-provision-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">deny\n            \n            <a name="consent-provision-type-deny"> </a>\n          \n          </td>\n          \n          <td>Opt Out</td>\n          \n          <td>Consent is denied for actions meeting these rules.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">permit\n            \n            <a name="consent-provision-type-permit"> </a>\n          \n          </td>\n          \n          <td>Opt In</td>\n          \n          <td>Consent is provided for actions meeting these rules.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cbcc",
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
  url: "http://hl7.org/fhir/consent-provision-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.758",
    },
  ],
  version: "4.3.0",
  name: "ConsentProvisionType",
  title: "ConsentProvisionType",
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
  description:
    "How a rule statement is applied, such as adding additional consent or removing consent.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/consent-provision-type",
  content: "complete",
  concept: [
    {
      code: "deny",
      display: "Opt Out",
      definition: "Consent is denied for actions meeting these rules.",
    },
    {
      code: "permit",
      display: "Opt In",
      definition: "Consent is provided for actions meeting these rules.",
    },
  ],
};
