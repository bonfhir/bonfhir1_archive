/**
 * This value set includes a sample set of Forms codes.
 * http://terminology.hl7.org/CodeSystem/forms-codes
 */
export const FormCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "forms",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/forms-codes defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">1<a name="forms-1"> </a></td><td>Form #1</td><td>Example: The #1 form to be used when printing this information.</td></tr><tr><td style="white-space:nowrap">2<a name="forms-2"> </a></td><td>Form #1</td><td>Example: The #2 form to be used when printing this information.</td></tr></table></div>',
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
  url: "http://terminology.hl7.org/CodeSystem/forms-codes",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1052",
    },
  ],
  version: "4.3.0",
  name: "Form Codes",
  status: "draft",
  experimental: true,
  publisher: "Financial Management",
  contact: [{ telecom: [{ system: "url", value: "http://hl7.org/fhir" }] }],
  description: "This value set includes a sample set of Forms codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/forms",
  content: "complete",
  concept: [
    {
      code: "1",
      display: "Form #1",
      definition:
        "Example: The #1 form to be used when printing this information.",
    },
    {
      code: "2",
      display: "Form #1",
      definition:
        "Example: The #2 form to be used when printing this information.",
    },
  ],
};
