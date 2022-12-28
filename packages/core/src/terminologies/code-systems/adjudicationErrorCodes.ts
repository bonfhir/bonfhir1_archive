export const AdjudicationErrorCodes = {
  resourceType: "CodeSystem",
  id: "adjudication-error",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/adjudication-error defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">a001<a name="adjudication-error-a001"> </a></td><td>Missing Identifier</td><td>Missing Identifier</td></tr><tr><td style="white-space:nowrap">a002<a name="adjudication-error-a002"> </a></td><td>Missing Creation Date</td><td>Missing Creation Date</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/adjudication-error",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1053",
    },
  ],
  version: "4.3.0",
  name: "Adjudication Error Codes",
  status: "draft",
  experimental: true,
  publisher: "Financial Management",
  contact: [{ telecom: [{ system: "url", value: "http://hl7.org/fhir" }] }],
  description: "This value set includes a smattering of adjudication codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/adjudication-error",
  content: "complete",
  concept: [
    {
      code: "a001",
      display: "Missing Identifier",
      definition: "Missing Identifier",
    },
    {
      code: "a002",
      display: "Missing Creation Date",
      definition: "Missing Creation Date",
    },
  ],
};
