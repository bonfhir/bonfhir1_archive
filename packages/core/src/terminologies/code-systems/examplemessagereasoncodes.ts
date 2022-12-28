/**
 * Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.
 * http://terminology.hl7.org/CodeSystem/message-reasons-encounter
 */
export const ExampleMessageReasonCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "message-reason-encounter",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/message-reasons-encounter defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">admit<a name="message-reason-encounter-admit"> </a></td><td>Admit</td><td>The patient has been admitted.</td></tr><tr><td style="white-space:nowrap">discharge<a name="message-reason-encounter-discharge"> </a></td><td>Discharge</td><td>The patient has been discharged.</td></tr><tr><td style="white-space:nowrap">absent<a name="message-reason-encounter-absent"> </a></td><td>Absent</td><td>The patient has temporarily left the institution.</td></tr><tr><td style="white-space:nowrap">return<a name="message-reason-encounter-return"> </a></td><td>Returned</td><td>The patient has returned from a temporary absence.</td></tr><tr><td style="white-space:nowrap">moved<a name="message-reason-encounter-moved"> </a></td><td>Moved</td><td>The patient has been moved to a new location.</td></tr><tr><td style="white-space:nowrap">edit<a name="message-reason-encounter-edit"> </a></td><td>Edit</td><td>Encounter details have been updated (e.g. to correct a coding error).</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "inm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/message-reasons-encounter",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1122",
    },
  ],
  version: "4.3.0",
  name: "ExampleMessageReasonCodes",
  title: "Example Message Reason Codes",
  status: "draft",
  experimental: false,
  description:
    "Example Message Reasons. These are the set of codes that might be used an updating an encounter using admin-update.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "admit",
      display: "Admit",
      definition: "The patient has been admitted.",
    },
    {
      code: "discharge",
      display: "Discharge",
      definition: "The patient has been discharged.",
    },
    {
      code: "absent",
      display: "Absent",
      definition: "The patient has temporarily left the institution.",
    },
    {
      code: "return",
      display: "Returned",
      definition: "The patient has returned from a temporary absence.",
    },
    {
      code: "moved",
      display: "Moved",
      definition: "The patient has been moved to a new location.",
    },
    {
      code: "edit",
      display: "Edit",
      definition:
        "Encounter details have been updated (e.g. to correct a coding error).",
    },
  ],
};
