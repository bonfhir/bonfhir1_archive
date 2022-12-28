export const AuditEventEntityType = {
  resourceType: "CodeSystem",
  id: "audit-entity-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/audit-entity-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">1<a name="audit-entity-type-1"> </a></td><td>Person</td><td>Person</td></tr><tr><td style="white-space:nowrap">2<a name="audit-entity-type-2"> </a></td><td>System Object</td><td>System Object</td></tr><tr><td style="white-space:nowrap">3<a name="audit-entity-type-3"> </a></td><td>Organization</td><td>Organization</td></tr><tr><td style="white-space:nowrap">4<a name="audit-entity-type-4"> </a></td><td>Other</td><td>Other</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "sec",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/audit-entity-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1134",
    },
  ],
  version: "4.3.0",
  name: "AuditEventEntityType",
  status: "draft",
  experimental: false,
  date: "2017-03-10T09:44:54+11:00",
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
    "Code for the entity type involved in the audit event (derived from ATNA).",
  copyright:
    "These codes are excerpted from Digital Imaging and Communications in Medicine (DICOM) Standard, Part 16: Content Mapping Resource, Copyright © 2011 by the National Electrical Manufacturers Association.",
  caseSensitive: true,
  content: "complete",
  concept: [
    { code: "1", display: "Person", definition: "Person" },
    { code: "2", display: "System Object", definition: "System Object" },
    { code: "3", display: "Organization", definition: "Organization" },
    { code: "4", display: "Other", definition: "Other" },
  ],
};
