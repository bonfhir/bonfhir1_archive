export const AuditEventSourceType = {
  resourceType: "CodeSystem",
  id: "audit-source-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/security-source-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">1<a name="audit-source-type-1"> </a></td><td>User Device</td><td>End-user display device, diagnostic device.</td></tr><tr><td style="white-space:nowrap">2<a name="audit-source-type-2"> </a></td><td>Data Interface</td><td>Data acquisition device or instrument.</td></tr><tr><td style="white-space:nowrap">3<a name="audit-source-type-3"> </a></td><td>Web Server</td><td>Web Server process or thread.</td></tr><tr><td style="white-space:nowrap">4<a name="audit-source-type-4"> </a></td><td>Application Server</td><td>Application Server process or thread.</td></tr><tr><td style="white-space:nowrap">5<a name="audit-source-type-5"> </a></td><td>Database Server</td><td>Database Server process or thread.</td></tr><tr><td style="white-space:nowrap">6<a name="audit-source-type-6"> </a></td><td>Security Server</td><td>Security server, e.g. a domain controller.</td></tr><tr><td style="white-space:nowrap">7<a name="audit-source-type-7"> </a></td><td>Network Device</td><td>ISO level 1-3 network component.</td></tr><tr><td style="white-space:nowrap">8<a name="audit-source-type-8"> </a></td><td>Network Router</td><td>ISO level 4-6 operating software.</td></tr><tr><td style="white-space:nowrap">9<a name="audit-source-type-9"> </a></td><td>Other</td><td>Other kind of device (defined by DICOM, but some other code/system can be used).</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "sec",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/security-source-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1137",
    },
  ],
  version: "4.3.0",
  name: "AuditEventSourceType",
  title: "Audit Event Source Type",
  status: "active",
  experimental: false,
  date: "2010-08-26T00:00:00+10:00",
  description: "The type of process where the audit event originated from.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "1",
      display: "User Device",
      definition: "End-user display device, diagnostic device.",
    },
    {
      code: "2",
      display: "Data Interface",
      definition: "Data acquisition device or instrument.",
    },
    {
      code: "3",
      display: "Web Server",
      definition: "Web Server process or thread.",
    },
    {
      code: "4",
      display: "Application Server",
      definition: "Application Server process or thread.",
    },
    {
      code: "5",
      display: "Database Server",
      definition: "Database Server process or thread.",
    },
    {
      code: "6",
      display: "Security Server",
      definition: "Security server, e.g. a domain controller.",
    },
    {
      code: "7",
      display: "Network Device",
      definition: "ISO level 1-3 network component.",
    },
    {
      code: "8",
      display: "Network Router",
      definition: "ISO level 4-6 operating software.",
    },
    {
      code: "9",
      display: "Other",
      definition:
        "Other kind of device (defined by DICOM, but some other code/system can be used).",
    },
  ],
};
