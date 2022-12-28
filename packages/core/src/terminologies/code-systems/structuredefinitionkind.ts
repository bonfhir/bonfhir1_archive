export const StructureDefinitionKind = {
  resourceType: "CodeSystem",
  id: "structure-definition-kind",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>StructureDefinitionKind</h2>\n      \n      <div>\n        \n        <p>Defines the type of structure that a definition is describing.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/structure-definition-kind defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">primitive-type\n            \n            <a name="structure-definition-kind-primitive-type"> </a>\n          \n          </td>\n          \n          <td>Primitive Data Type</td>\n          \n          <td>A primitive type that has a value and an extension. These can be used throughout complex datatype, Resource and extension definitions. Only the base specification can define primitive types.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">complex-type\n            \n            <a name="structure-definition-kind-complex-type"> </a>\n          \n          </td>\n          \n          <td>Complex Data Type</td>\n          \n          <td>A  complex structure that defines a set of data elements that is suitable for use in \'resources\'. The base specification defines a number of complex types, and other specifications can define additional types. These structures do not have a maintained identity.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">resource\n            \n            <a name="structure-definition-kind-resource"> </a>\n          \n          </td>\n          \n          <td>Resource</td>\n          \n          <td>A \'resource\' - a directed acyclic graph of elements that aggregrates other types into an identifiable entity. The base FHIR resources are defined by the FHIR specification itself but other \'resources\' can be defined in additional specifications (though these will not be recognised as \'resources\' by the FHIR specification (i.e. they do not get end-points etc, or act as the targets of references in FHIR defined resources - though other specificatiosn can treat them this way).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">logical\n            \n            <a name="structure-definition-kind-logical"> </a>\n          \n          </td>\n          \n          <td>Logical</td>\n          \n          <td>A pattern or a template that is not intended to be a real resource or complex type.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/structure-definition-kind",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.669",
    },
  ],
  version: "4.3.0",
  name: "StructureDefinitionKind",
  title: "StructureDefinitionKind",
  status: "active",
  experimental: false,
  date: "2021-01-17T07:06:13+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "Defines the type of structure that a definition is describing.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/structure-definition-kind",
  content: "complete",
  concept: [
    {
      code: "primitive-type",
      display: "Primitive Data Type",
      definition:
        "A primitive type that has a value and an extension. These can be used throughout complex datatype, Resource and extension definitions. Only the base specification can define primitive types.",
    },
    {
      code: "complex-type",
      display: "Complex Data Type",
      definition:
        "A  complex structure that defines a set of data elements that is suitable for use in 'resources'. The base specification defines a number of complex types, and other specifications can define additional types. These structures do not have a maintained identity.",
    },
    {
      code: "resource",
      display: "Resource",
      definition:
        "A 'resource' - a directed acyclic graph of elements that aggregrates other types into an identifiable entity. The base FHIR resources are defined by the FHIR specification itself but other 'resources' can be defined in additional specifications (though these will not be recognised as 'resources' by the FHIR specification (i.e. they do not get end-points etc, or act as the targets of references in FHIR defined resources - though other specificatiosn can treat them this way).",
    },
    {
      code: "logical",
      display: "Logical",
      definition:
        "A pattern or a template that is not intended to be a real resource or complex type.",
    },
  ],
};
