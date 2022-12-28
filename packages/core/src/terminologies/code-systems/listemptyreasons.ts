/**
 * General reasons for a list to be empty. Reasons are either related to a summary list (i.e. problem or medication list) or to a workflow related list (i.e. consultation list).
 * http://terminology.hl7.org/CodeSystem/list-empty-reason
 */
export const ListEmptyReasonsCodeSystem = {
  resourceType: "CodeSystem",
  id: "list-empty-reason",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/list-empty-reason defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">nilknown<a name="list-empty-reason-nilknown"> </a></td><td>Nil Known</td><td>Clinical judgment that there are no known items for this list after reasonable investigation. Note that this a positive statement by a clinical user, and not a default position asserted by a computer system in the lack of other information. Example uses:  * For allergies: the patient or patient\'s agent/guardian has asserted that he/she is not aware of any allergies (NKA - nil known allergies)  * For medications: the patient or patient\'s agent/guardian has asserted that the patient is known to be taking no medications  * For diagnoses, problems and procedures: the patient or patient\'s agent/guardian has asserted that there is no known event to record.</td></tr><tr><td style="white-space:nowrap">notasked<a name="list-empty-reason-notasked"> </a></td><td>Not Asked</td><td>The investigation to find out whether there are items for this list has not occurred.</td></tr><tr><td style="white-space:nowrap">withheld<a name="list-empty-reason-withheld"> </a></td><td>Information Withheld</td><td>The content of the list was not provided due to privacy or confidentiality concerns. Note that it should not be assumed that this means that the particular information in question was withheld due to its contents - it can also be a policy decision.</td></tr><tr><td style="white-space:nowrap">unavailable<a name="list-empty-reason-unavailable"> </a></td><td>Unavailable</td><td>Information to populate this list cannot be obtained; e.g. unconscious patient.</td></tr><tr><td style="white-space:nowrap">notstarted<a name="list-empty-reason-notstarted"> </a></td><td>Not Started</td><td>The work to populate this list has not yet begun.</td></tr><tr><td style="white-space:nowrap">closed<a name="list-empty-reason-closed"> </a></td><td>Closed</td><td>This list has now closed or has ceased to be relevant or useful.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/list-empty-reason",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1106",
    },
  ],
  version: "4.3.0",
  name: "ListEmptyReasons",
  title: "List Empty Reasons",
  status: "draft",
  experimental: false,
  description:
    "General reasons for a list to be empty. Reasons are either related to a summary list (i.e. problem or medication list) or to a workflow related list (i.e. consultation list).",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "nilknown",
      display: "Nil Known",
      definition:
        "Clinical judgment that there are no known items for this list after reasonable investigation. Note that this a positive statement by a clinical user, and not a default position asserted by a computer system in the lack of other information. Example uses:  * For allergies: the patient or patient's agent/guardian has asserted that he/she is not aware of any allergies (NKA - nil known allergies)  * For medications: the patient or patient's agent/guardian has asserted that the patient is known to be taking no medications  * For diagnoses, problems and procedures: the patient or patient's agent/guardian has asserted that there is no known event to record.",
    },
    {
      code: "notasked",
      display: "Not Asked",
      definition:
        "The investigation to find out whether there are items for this list has not occurred.",
    },
    {
      code: "withheld",
      display: "Information Withheld",
      definition:
        "The content of the list was not provided due to privacy or confidentiality concerns. Note that it should not be assumed that this means that the particular information in question was withheld due to its contents - it can also be a policy decision.",
    },
    {
      code: "unavailable",
      display: "Unavailable",
      definition:
        "Information to populate this list cannot be obtained; e.g. unconscious patient.",
    },
    {
      code: "notstarted",
      display: "Not Started",
      definition: "The work to populate this list has not yet begun.",
    },
    {
      code: "closed",
      display: "Closed",
      definition:
        "This list has now closed or has ceased to be relevant or useful.",
    },
  ],
};
