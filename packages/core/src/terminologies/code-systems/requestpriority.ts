/**
 * Identifies the level of importance to be assigned to actioning the request.
 * http://hl7.org/fhir/request-priority
 */
export const RequestPriorityCodeSystem = {
  resourceType: "CodeSystem",
  id: "request-priority",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/request-priority defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">routine<a name="request-priority-routine"> </a></td><td>Routine</td><td>The request has normal priority.</td></tr><tr><td style="white-space:nowrap">urgent<a name="request-priority-urgent"> </a></td><td>Urgent</td><td>The request should be actioned promptly - higher priority than routine.</td></tr><tr><td style="white-space:nowrap">asap<a name="request-priority-asap"> </a></td><td>ASAP</td><td>The request should be actioned as soon as possible - higher priority than urgent.</td></tr><tr><td style="white-space:nowrap">stat<a name="request-priority-stat"> </a></td><td>STAT</td><td>The request should be actioned immediately - highest possible priority.  E.g. an emergency.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
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
  url: "http://hl7.org/fhir/request-priority",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.116",
    },
  ],
  version: "4.3.0",
  name: "RequestPriority",
  title: "RequestPriority",
  status: "draft",
  experimental: true,
  date: "2022-05-28T12:47:40+10:00",
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
    "Identifies the level of importance to be assigned to actioning the request.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/request-priority",
  content: "complete",
  concept: [
    {
      code: "routine",
      display: "Routine",
      definition: "The request has normal priority.",
    },
    {
      code: "urgent",
      display: "Urgent",
      definition:
        "The request should be actioned promptly - higher priority than routine.",
    },
    {
      code: "asap",
      display: "ASAP",
      definition:
        "The request should be actioned as soon as possible - higher priority than urgent.",
    },
    {
      code: "stat",
      display: "STAT",
      definition:
        "The request should be actioned immediately - highest possible priority.  E.g. an emergency.",
    },
  ],
};
