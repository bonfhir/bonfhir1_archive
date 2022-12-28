/**
 * This value set includes sample Program reason codes.
 * http://terminology.hl7.org/CodeSystem/ex-programcode
 */
export const ExampleProgramCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "ex-program-code",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/ex-programcode defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">as<a name="ex-program-code-as"> </a></td><td>Child Asthma</td><td>Child Asthma Program</td></tr><tr><td style="white-space:nowrap">hd<a name="ex-program-code-hd"> </a></td><td>Hemodialysis</td><td>Hemodialysis Program.</td></tr><tr><td style="white-space:nowrap">auscr<a name="ex-program-code-auscr"> </a></td><td>Autism Screening</td><td>Autism Screening Program.</td></tr><tr><td style="white-space:nowrap">none<a name="ex-program-code-none"> </a></td><td>None</td><td>No program code applies.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/ex-programcode",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1161",
    },
  ],
  version: "4.3.0",
  name: "ExampleProgramCodes",
  title: "Example Program Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes sample Program reason codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    { code: "as", display: "Child Asthma", definition: "Child Asthma Program" },
    {
      code: "hd",
      display: "Hemodialysis",
      definition: "Hemodialysis Program.",
    },
    {
      code: "auscr",
      display: "Autism Screening",
      definition: "Autism Screening Program.",
    },
    { code: "none", display: "None", definition: "No program code applies." },
  ],
};
