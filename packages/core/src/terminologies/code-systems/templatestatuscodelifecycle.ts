export const TemplateStatusCodeLifeCycle = {
  resourceType: "CodeSystem",
  id: "template-status-code",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system urn:oid:2.16.840.1.113883.3.1937.98.5.8 defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">draft<a name="template-status-code-draft"> </a></td><td>Draft</td><td>Design is under development (nascent).</td></tr><tr><td style="white-space:nowrap">pending<a name="template-status-code-pending"> </a></td><td>Under pre-publication review</td><td>Design is completed and is being reviewed.</td></tr><tr><td style="white-space:nowrap">active<a name="template-status-code-active"> </a></td><td>active</td><td>Design has been deemed fit for the intended purpose and is published by the governance      group.</td></tr><tr><td style="white-space:nowrap">review<a name="template-status-code-review"> </a></td><td>In Review</td><td>Design is active, but is under review. The review may result in a change to the design.      The change may necessitate a new version to be created. This in turn may result in the      prior version of the template to be retired. Alternatively, the review may result in a      change to the design that does not require a new version to be created, or it may result      in no change to the design at all.</td></tr><tr><td style="white-space:nowrap">cancelled<a name="template-status-code-cancelled"> </a></td><td>Cancelled</td><td>A drafted design is determined to be erroneous or not fit for intended purpose and is      discontinued before ever being published in an active state.</td></tr><tr><td style="white-space:nowrap">rejected<a name="template-status-code-rejected"> </a></td><td>Rejected</td><td>A previously drafted design is determined to be erroneous or not fit for intended purpose      and is discontinued before ever being published for consideration in a pending state.</td></tr><tr><td style="white-space:nowrap">retired<a name="template-status-code-retired"> </a></td><td>retired</td><td>A previously active design is discontinued from use. It should no longer be used for future      designs, but for historical purposes may be used to process data previously recorded using      this design. A newer design may or may not exist. The design is published in the retired      state.</td></tr><tr><td style="white-space:nowrap">terminated<a name="template-status-code-terminated"> </a></td><td>Terminated</td><td>A design is determined to be erroneous or not fit for the intended purpose and should      no longer be used, even for historical purposes. No new designs can be developed for this      template. The associated template no longer needs to be published, but if published, is      shown in the terminated state.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "urn:oid:2.16.840.1.113883.3.1937.98.5.8",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "TemplateStatusCodeLifeCycle",
  title: "TemplateStatusCode LifeCycle",
  status: "active",
  experimental: false,
  date: "2013-12-05",
  publisher: "Art-Decor",
  description: "Life cycle of the Status Code of a Template Design (Version)",
  caseSensitive: true,
  valueSet: "urn:oid:2.16.840.1.113883.3.1937.98.11.8",
  content: "complete",
  concept: [
    {
      code: "draft",
      display: "Draft",
      definition: "Design is under development (nascent).",
    },
    {
      code: "pending",
      display: "Under pre-publication review",
      definition: "Design is completed and is being reviewed.",
    },
    {
      code: "active",
      display: "active",
      definition:
        "Design has been deemed fit for the intended purpose and is published by the governance      group.",
    },
    {
      code: "review",
      display: "In Review",
      definition:
        "Design is active, but is under review. The review may result in a change to the design.      The change may necessitate a new version to be created. This in turn may result in the      prior version of the template to be retired. Alternatively, the review may result in a      change to the design that does not require a new version to be created, or it may result      in no change to the design at all.",
    },
    {
      code: "cancelled",
      display: "Cancelled",
      definition:
        "A drafted design is determined to be erroneous or not fit for intended purpose and is      discontinued before ever being published in an active state.",
    },
    {
      code: "rejected",
      display: "Rejected",
      definition:
        "A previously drafted design is determined to be erroneous or not fit for intended purpose      and is discontinued before ever being published for consideration in a pending state.",
    },
    {
      code: "retired",
      display: "retired",
      definition:
        "A previously active design is discontinued from use. It should no longer be used for future      designs, but for historical purposes may be used to process data previously recorded using      this design. A newer design may or may not exist. The design is published in the retired      state.",
    },
    {
      code: "terminated",
      display: "Terminated",
      definition:
        "A design is determined to be erroneous or not fit for the intended purpose and should      no longer be used, even for historical purposes. No new designs can be developed for this      template. The associated template no longer needs to be published, but if published, is      shown in the terminated state.",
    },
  ],
};
