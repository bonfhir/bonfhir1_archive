/**
 * Indicator for type of action performed during the event that generated the event.
 * http://hl7.org/fhir/audit-event-action
 */
export const AuditEventActionCodeSystem = {
  resourceType: "CodeSystem",
  id: "audit-event-action",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>AuditEventAction</h2>\n      \n      <div>\n        \n        <p>Indicator for type of action performed during the event that generated the event.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/audit-event-action defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">C\n            \n            <a name="audit-event-action-C"> </a>\n          \n          </td>\n          \n          <td>Create</td>\n          \n          <td>Create a new database object, such as placing an order.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">R\n            \n            <a name="audit-event-action-R"> </a>\n          \n          </td>\n          \n          <td>Read/View/Print</td>\n          \n          <td>Display or print data, such as a doctor census.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">U\n            \n            <a name="audit-event-action-U"> </a>\n          \n          </td>\n          \n          <td>Update</td>\n          \n          <td>Update data, such as revise patient information.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">D\n            \n            <a name="audit-event-action-D"> </a>\n          \n          </td>\n          \n          <td>Delete</td>\n          \n          <td>Delete items, such as a doctor master file record.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">E\n            \n            <a name="audit-event-action-E"> </a>\n          \n          </td>\n          \n          <td>Execute</td>\n          \n          <td>Perform a system or application function such as log-on, program execution or use of an object\'s method, or perform a query/search operation.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/audit-event-action",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.453",
    },
  ],
  version: "4.3.0",
  name: "AuditEventAction",
  title: "AuditEventAction",
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
    "Indicator for type of action performed during the event that generated the event.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/audit-event-action",
  content: "complete",
  concept: [
    {
      code: "C",
      display: "Create",
      definition: "Create a new database object, such as placing an order.",
    },
    {
      code: "R",
      display: "Read/View/Print",
      definition: "Display or print data, such as a doctor census.",
    },
    {
      code: "U",
      display: "Update",
      definition: "Update data, such as revise patient information.",
    },
    {
      code: "D",
      display: "Delete",
      definition: "Delete items, such as a doctor master file record.",
    },
    {
      code: "E",
      display: "Execute",
      definition:
        "Perform a system or application function such as log-on, program execution or use of an object's method, or perform a query/search operation.",
    },
  ],
};
