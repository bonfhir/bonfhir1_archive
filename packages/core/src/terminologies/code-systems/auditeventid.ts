/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 * http://terminology.hl7.org/CodeSystem/audit-event-type
 */
export const AuditEventIDCodeSystem = {
  resourceType: "CodeSystem",
  id: "audit-event-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/audit-event-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">rest<a name="audit-event-type-rest"> </a></td><td>RESTful Operation</td><td>Audit Event: Execution of a RESTful operation as defined by FHIR.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "sec",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/audit-event-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1136",
    },
  ],
  version: "4.3.0",
  name: "AuditEventID",
  title: "Audit Event ID",
  status: "active",
  experimental: false,
  date: "2015-03-26T00:00:00+11:00",
  description:
    "Event Types for Audit Events - defined by DICOM with some FHIR specific additions.",
  copyright:
    "These codes are excerpted from Digital Imaging and Communications in Medicine (DICOM) Standard, Part 16: Content Mapping Resource, Copyright © 2011 by the National Electrical Manufacturers Association.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "rest",
      display: "RESTful Operation",
      definition:
        "Audit Event: Execution of a RESTful operation as defined by FHIR.",
    },
  ],
};
