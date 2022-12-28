/**
 * Indicates whether the event succeeded or failed.
 * http://hl7.org/fhir/audit-event-outcome
 */
export const AuditEventOutcomeCodeSystem = {
  resourceType: "CodeSystem",
  id: "audit-event-outcome",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>AuditEventOutcome</h2>\n      \n      <div>\n        \n        <p>Indicates whether the event succeeded or failed.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/audit-event-outcome defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">0\n            \n            <a name="audit-event-outcome-0"> </a>\n          \n          </td>\n          \n          <td>Success</td>\n          \n          <td>The operation completed successfully (whether with warnings or not).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">4\n            \n            <a name="audit-event-outcome-4"> </a>\n          \n          </td>\n          \n          <td>Minor failure</td>\n          \n          <td>The action was not successful due to some kind of minor failure (often equivalent to an HTTP 400 response).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">8\n            \n            <a name="audit-event-outcome-8"> </a>\n          \n          </td>\n          \n          <td>Serious failure</td>\n          \n          <td>The action was not successful due to some kind of unexpected error (often equivalent to an HTTP 500 response).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">12\n            \n            <a name="audit-event-outcome-12"> </a>\n          \n          </td>\n          \n          <td>Major failure</td>\n          \n          <td>An error of such magnitude occurred that the system is no longer available for use (i.e. the system died).</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "sec",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 3,
    },
  ],
  url: "http://hl7.org/fhir/audit-event-outcome",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.455",
    },
  ],
  version: "4.3.0",
  name: "AuditEventOutcome",
  title: "AuditEventOutcome",
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
  description: "Indicates whether the event succeeded or failed.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/audit-event-outcome",
  content: "complete",
  concept: [
    {
      code: "0",
      display: "Success",
      definition:
        "The operation completed successfully (whether with warnings or not).",
    },
    {
      code: "4",
      display: "Minor failure",
      definition:
        "The action was not successful due to some kind of minor failure (often equivalent to an HTTP 400 response).",
    },
    {
      code: "8",
      display: "Serious failure",
      definition:
        "The action was not successful due to some kind of unexpected error (often equivalent to an HTTP 500 response).",
    },
    {
      code: "12",
      display: "Major failure",
      definition:
        "An error of such magnitude occurred that the system is no longer available for use (i.e. the system died).",
    },
  ],
};
