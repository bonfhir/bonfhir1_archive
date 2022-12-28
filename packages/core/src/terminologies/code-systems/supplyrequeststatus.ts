/**
 * Status of the supply request.
 * http://hl7.org/fhir/supplyrequest-status
 */
export const SupplyRequestStatusCodeSystem = {
  resourceType: "CodeSystem",
  id: "supplyrequest-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>SupplyRequestStatus</h2>\n      \n      <div>\n        \n        <p>Status of the supply request.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/supplyrequest-status defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">draft\n            \n            <a name="supplyrequest-status-draft"> </a>\n          \n          </td>\n          \n          <td>Draft</td>\n          \n          <td>The request has been created but is not yet complete or ready for action.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">active\n            \n            <a name="supplyrequest-status-active"> </a>\n          \n          </td>\n          \n          <td>Active</td>\n          \n          <td>The request is ready to be acted upon.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">suspended\n            \n            <a name="supplyrequest-status-suspended"> </a>\n          \n          </td>\n          \n          <td>Suspended</td>\n          \n          <td>The authorization/request to act has been temporarily withdrawn but is expected to resume in the future.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">cancelled\n            \n            <a name="supplyrequest-status-cancelled"> </a>\n          \n          </td>\n          \n          <td>Cancelled</td>\n          \n          <td>The authorization/request to act has been terminated prior to the full completion of the intended actions.  No further activity should occur.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">completed\n            \n            <a name="supplyrequest-status-completed"> </a>\n          \n          </td>\n          \n          <td>Completed</td>\n          \n          <td>Activity against the request has been sufficiently completed to the satisfaction of the requester.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">entered-in-error\n            \n            <a name="supplyrequest-status-entered-in-error"> </a>\n          \n          </td>\n          \n          <td>Entered in Error</td>\n          \n          <td>This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be &quot;cancelled&quot; rather than &quot;entered-in-error&quot;.).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">unknown\n            \n            <a name="supplyrequest-status-unknown"> </a>\n          \n          </td>\n          \n          <td>Unknown</td>\n          \n          <td>The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for &quot;other&quot; - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/supplyrequest-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.696",
    },
  ],
  version: "4.3.0",
  name: "SupplyRequestStatus",
  title: "SupplyRequestStatus",
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
  description: "Status of the supply request.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/supplyrequest-status",
  content: "complete",
  concept: [
    {
      code: "draft",
      display: "Draft",
      definition:
        "The request has been created but is not yet complete or ready for action.",
    },
    {
      code: "active",
      display: "Active",
      definition: "The request is ready to be acted upon.",
    },
    {
      code: "suspended",
      display: "Suspended",
      definition:
        "The authorization/request to act has been temporarily withdrawn but is expected to resume in the future.",
    },
    {
      code: "cancelled",
      display: "Cancelled",
      definition:
        "The authorization/request to act has been terminated prior to the full completion of the intended actions.  No further activity should occur.",
    },
    {
      code: "completed",
      display: "Completed",
      definition:
        "Activity against the request has been sufficiently completed to the satisfaction of the requester.",
    },
    {
      code: "entered-in-error",
      display: "Entered in Error",
      definition:
        'This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).',
    },
    {
      code: "unknown",
      display: "Unknown",
      definition:
        'The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.',
    },
  ],
};
