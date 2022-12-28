/**
 * How slices are interpreted when evaluating an instance.
 * http://hl7.org/fhir/resource-slicing-rules
 */
export const SlicingRulesCodeSystem = {
  resourceType: "CodeSystem",
  id: "resource-slicing-rules",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/resource-slicing-rules defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">closed<a name="resource-slicing-rules-closed"> </a></td><td>Closed</td><td>No additional content is allowed other than that described by the slices in this profile.</td></tr><tr><td style="white-space:nowrap">open<a name="resource-slicing-rules-open"> </a></td><td>Open</td><td>Additional content is allowed anywhere in the list.</td></tr><tr><td style="white-space:nowrap">openAtEnd<a name="resource-slicing-rules-openAtEnd"> </a></td><td>Open at End</td><td>Additional content is allowed, but only at the end of the list. Note that using this requires that the slices be ordered, which makes it hard to share uses. This should only be done where absolutely required.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
  ],
  url: "http://hl7.org/fhir/resource-slicing-rules",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.84",
    },
  ],
  version: "4.3.0",
  name: "SlicingRules",
  title: "SlicingRules",
  status: "active",
  experimental: false,
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
  description: "How slices are interpreted when evaluating an instance.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/resource-slicing-rules",
  content: "complete",
  concept: [
    {
      code: "closed",
      display: "Closed",
      definition:
        "No additional content is allowed other than that described by the slices in this profile.",
    },
    {
      code: "open",
      display: "Open",
      definition: "Additional content is allowed anywhere in the list.",
    },
    {
      code: "openAtEnd",
      display: "Open at End",
      definition:
        "Additional content is allowed, but only at the end of the list. Note that using this requires that the slices be ordered, which makes it hard to share uses. This should only be done where absolutely required.",
    },
  ],
};
