/**
 * This value set includes the financial processing priority codes.
 * http://terminology.hl7.org/CodeSystem/processpriority
 */
export const PriorityCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "process-priority",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/processpriority defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">stat<a name="process-priority-stat"> </a></td><td>Immediate</td><td>Immediately in real time.</td></tr><tr><td style="white-space:nowrap">normal<a name="process-priority-normal"> </a></td><td>Normal</td><td>With best effort.</td></tr><tr><td style="white-space:nowrap">deferred<a name="process-priority-deferred"> </a></td><td>Deferred</td><td>Later, when possible.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/processpriority",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1155",
    },
  ],
  version: "4.3.0",
  name: "PriorityCodes",
  title: "Priority Codes",
  status: "draft",
  experimental: false,
  description:
    "This value set includes the financial processing priority codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "stat",
      display: "Immediate",
      definition: "Immediately in real time.",
    },
    { code: "normal", display: "Normal", definition: "With best effort." },
    {
      code: "deferred",
      display: "Deferred",
      definition: "Later, when possible.",
    },
  ],
};
