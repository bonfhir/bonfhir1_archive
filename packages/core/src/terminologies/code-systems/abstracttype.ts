/**
 * A list of the base types defined by this version of the FHIR specification - types that are defined, but for which only specializations actually are created.
 * http://hl7.org/fhir/abstract-types
 */
export const AbstractTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "abstract-types",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/abstract-types defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">Type<a name="abstract-types-Type"> </a></td><td>Type</td><td>A place holder that means any kind of data type</td></tr><tr><td style="white-space:nowrap">Any<a name="abstract-types-Any"> </a></td><td>Any</td><td>A place holder that means any kind of resource</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/valueset-special-status",
      valueString:
        "This Code System is normative - it is generated based on the information defined in this specification. The definition will remain fixed  across versions, but the actual contents will change from version to version",
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
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "http://hl7.org/fhir/abstract-types",
  version: "4.3.0",
  name: "AbstractType",
  title: "AbstractType",
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
  description:
    "A list of the base types defined by this version of the FHIR specification - types that are defined, but for which only specializations actually are created.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "Type",
      display: "Type",
      definition: "A place holder that means any kind of data type",
    },
    {
      code: "Any",
      display: "Any",
      definition: "A place holder that means any kind of resource",
    },
  ],
};
