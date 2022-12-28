export const DocumentReferenceStatus = {
  resourceType: "CodeSystem",
  id: "document-reference-status",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/document-reference-status defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">current<a name="document-reference-status-current"> </a></td><td>Current</td><td>This is the current reference for this document.</td></tr><tr><td style="white-space:nowrap">superseded<a name="document-reference-status-superseded"> </a></td><td>Superseded</td><td>This reference has been superseded by another reference.</td></tr><tr><td style="white-space:nowrap">entered-in-error<a name="document-reference-status-entered-in-error"> </a></td><td>Entered in Error</td><td>This reference was created in error.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "sd",
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
  url: "http://hl7.org/fhir/document-reference-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.8",
    },
  ],
  version: "4.3.0",
  name: "DocumentReferenceStatus",
  title: "DocumentReferenceStatus",
  status: "draft",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  description: "The status of the document reference.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/document-reference-status",
  content: "complete",
  concept: [
    {
      code: "current",
      display: "Current",
      definition: "This is the current reference for this document.",
    },
    {
      code: "superseded",
      display: "Superseded",
      definition: "This reference has been superseded by another reference.",
    },
    {
      code: "entered-in-error",
      display: "Entered in Error",
      definition: "This reference was created in error.",
    },
  ],
};
