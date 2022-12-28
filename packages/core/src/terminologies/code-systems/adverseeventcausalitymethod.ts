export const AdverseEventCausalityMethod = {
  resourceType: "CodeSystem",
  id: "adverse-event-causality-method",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>AdverseEventCausalityMethod</h2>\n      \n      <div>\n        \n        <p>TODO.</p>\n\n      \n      </div>\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/adverse-event-causality-method defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ProbabilityScale\n            \n            <a name="adverse-event-causality-method-ProbabilityScale"> </a>\n          \n          </td>\n          \n          <td>Probability Scale</td>\n          \n          <td/>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Bayesian\n            \n            <a name="adverse-event-causality-method-Bayesian"> </a>\n          \n          </td>\n          \n          <td>Bayesian</td>\n          \n          <td/>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Checklist\n            \n            <a name="adverse-event-causality-method-Checklist"> </a>\n          \n          </td>\n          \n          <td>Checklist</td>\n          \n          <td/>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
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
  url: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-method",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1255",
    },
  ],
  version: "4.3.0",
  name: "AdverseEventCausalityMethod",
  title: "AdverseEventCausalityMethod",
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
  description: "TODO.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/adverse-event-causality-method",
  content: "complete",
  concept: [
    { code: "ProbabilityScale", display: "Probability Scale" },
    { code: "Bayesian", display: "Bayesian" },
    { code: "Checklist", display: "Checklist" },
  ],
};
