/**
 * A set of common concept properties for use on coded systems throughout the FHIR eco-system.
 * http://hl7.org/fhir/concept-properties
 */
export const FHIRDefinedConceptPropertiesCodeSystem = {
  resourceType: "CodeSystem",
  id: "concept-properties",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/concept-properties defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">inactive<a name="concept-properties-inactive"> </a></td><td>Inactive</td><td>True if the concept is not considered active - e.g. not a valid concept any more. Property type is boolean, default value is false</td></tr><tr><td style="white-space:nowrap">deprecated<a name="concept-properties-deprecated"> </a></td><td>Deprecated</td><td>The date at which a concept was deprecated. Concepts that are deprecated but not inactive can still be used, but their use is discouraged, and they should be expected to be made inactive in a future release. Property type is dateTime</td></tr><tr><td style="white-space:nowrap">notSelectable<a name="concept-properties-notSelectable"> </a></td><td>Not Selectable</td><td>The concept is not intended to be chosen by the user - only intended to be used as a selector for other concepts. Note, though, that the interpretation of this is highly contextual; all concepts are selectable in some context. Property type is boolean</td></tr><tr><td style="white-space:nowrap">parent<a name="concept-properties-parent"> </a></td><td>Parent</td><td>The concept identified in this property is a parent of the concept on which it is a property. The property type will be \'code\'. The meaning of \'parent\' is defined by the hierarchyMeaning attribute</td></tr><tr><td style="white-space:nowrap">child<a name="concept-properties-child"> </a></td><td>Child</td><td>The concept identified in this property is a child of the concept on which it is a property. The property type will be \'code\'. The meaning of \'child\' is defined by the hierarchyMeaning attribute</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "vocab",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 4,
    },
  ],
  url: "http://hl7.org/fhir/concept-properties",
  version: "4.3.0",
  name: "FHIR Defined Concept Properties",
  status: "draft",
  experimental: false,
  publisher: "FHIR Project",
  description:
    "A set of common concept properties for use on coded systems throughout the FHIR eco-system.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/concept-properties",
  content: "complete",
  concept: [
    {
      code: "inactive",
      display: "Inactive",
      definition:
        "True if the concept is not considered active - e.g. not a valid concept any more. Property type is boolean, default value is false",
    },
    {
      code: "deprecated",
      display: "Deprecated",
      definition:
        "The date at which a concept was deprecated. Concepts that are deprecated but not inactive can still be used, but their use is discouraged, and they should be expected to be made inactive in a future release. Property type is dateTime",
    },
    {
      code: "notSelectable",
      display: "Not Selectable",
      definition:
        "The concept is not intended to be chosen by the user - only intended to be used as a selector for other concepts. Note, though, that the interpretation of this is highly contextual; all concepts are selectable in some context. Property type is boolean",
    },
    {
      code: "parent",
      display: "Parent",
      definition:
        "The concept identified in this property is a parent of the concept on which it is a property. The property type will be 'code'. The meaning of 'parent' is defined by the hierarchyMeaning attribute",
    },
    {
      code: "child",
      display: "Child",
      definition:
        "The concept identified in this property is a child of the concept on which it is a property. The property type will be 'code'. The meaning of 'child' is defined by the hierarchyMeaning attribute",
    },
  ],
};
