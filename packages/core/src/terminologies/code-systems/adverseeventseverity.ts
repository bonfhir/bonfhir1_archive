/**
 * The severity of the adverse event itself, in direct relation to the subject.
 * http://terminology.hl7.org/CodeSystem/adverse-event-severity
 */
export const AdverseEventSeverityCodeSystem = {
  resourceType: "CodeSystem",
  id: "adverse-event-severity",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>AdverseEventSeverity</h2>\n      \n      <div>\n        \n        <p>The severity of the adverse event itself, in direct relation to the subject.</p>\n\n      \n      </div>\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/adverse-event-severity defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">mild\n            \n            <a name="adverse-event-severity-mild"> </a>\n          \n          </td>\n          \n          <td>Mild</td>\n          \n          <td/>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">moderate\n            \n            <a name="adverse-event-severity-moderate"> </a>\n          \n          </td>\n          \n          <td>Moderate</td>\n          \n          <td/>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">severe\n            \n            <a name="adverse-event-severity-severe"> </a>\n          \n          </td>\n          \n          <td>Severe</td>\n          \n          <td/>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
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
  url: "http://terminology.hl7.org/CodeSystem/adverse-event-severity",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1256",
    },
  ],
  version: "4.3.0",
  name: "AdverseEventSeverity",
  title: "AdverseEventSeverity",
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
    "The severity of the adverse event itself, in direct relation to the subject.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/adverse-event-severity",
  content: "complete",
  concept: [
    { code: "mild", display: "Mild" },
    { code: "moderate", display: "Moderate" },
    { code: "severe", display: "Severe" },
  ],
};
