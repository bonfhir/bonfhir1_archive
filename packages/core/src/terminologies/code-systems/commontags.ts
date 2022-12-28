/**
 * Common Tag Codes defined by FHIR project
 * http://terminology.hl7.org/CodeSystem/common-tags
 */
export const CommonTagsCodeSystem = {
  resourceType: "CodeSystem",
  id: "common-tags",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/common-tags defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">actionable<a name="common-tags-actionable"> </a></td><td>Actionable</td><td>This request is intended to be acted upon, not merely stored</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
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
  url: "http://terminology.hl7.org/CodeSystem/common-tags",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1067",
    },
  ],
  version: "4.3.0",
  name: "CommonTags",
  title: "Common Tags",
  status: "draft",
  experimental: true,
  publisher: "FHIR Project team",
  contact: [{ telecom: [{ system: "url", value: "http://hl7.org/fhir" }] }],
  description: "Common Tag Codes defined by FHIR project",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/common-tags",
  content: "complete",
  concept: [
    {
      code: "actionable",
      display: "Actionable",
      definition:
        "This request is intended to be acted upon, not merely stored",
    },
  ],
};
