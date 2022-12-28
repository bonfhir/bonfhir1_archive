export const NoteType = {
  resourceType: "CodeSystem",
  id: "note-type",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/note-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">display<a name="note-type-display"> </a></td><td>Display</td><td>Display the note.</td></tr><tr><td style="white-space:nowrap">print<a name="note-type-print"> </a></td><td>Print (Form)</td><td>Print the note on the form.</td></tr><tr><td style="white-space:nowrap">printoper<a name="note-type-printoper"> </a></td><td>Print (Operator)</td><td>Print the note for the operator.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/note-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.16",
    },
  ],
  version: "4.3.0",
  name: "NoteType",
  title: "NoteType",
  status: "draft",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  description: "The presentation types of notes.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/note-type",
  content: "complete",
  concept: [
    { code: "display", display: "Display", definition: "Display the note." },
    {
      code: "print",
      display: "Print (Form)",
      definition: "Print the note on the form.",
    },
    {
      code: "printoper",
      display: "Print (Operator)",
      definition: "Print the note for the operator.",
    },
  ],
};
