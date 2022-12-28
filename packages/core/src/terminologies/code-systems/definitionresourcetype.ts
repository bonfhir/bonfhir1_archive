export const DefinitionResourceType = {
  resourceType: "CodeSystem",
  id: "definition-resource-types",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/definition-resource-types defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">ActivityDefinition<a name="definition-resource-types-ActivityDefinition"> </a></td><td>ActivityDefinition</td><td>This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.</td></tr><tr><td style="white-space:nowrap">EventDefinition<a name="definition-resource-types-EventDefinition"> </a></td><td>EventDefinition</td><td>The EventDefinition resource provides a reusable description of when a particular event can occur.</td></tr><tr><td style="white-space:nowrap">Measure<a name="definition-resource-types-Measure"> </a></td><td>Measure</td><td>The Measure resource provides the definition of a quality measure.</td></tr><tr><td style="white-space:nowrap">OperationDefinition<a name="definition-resource-types-OperationDefinition"> </a></td><td>OperationDefinition</td><td>A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).</td></tr><tr><td style="white-space:nowrap">PlanDefinition<a name="definition-resource-types-PlanDefinition"> </a></td><td>PlanDefinition</td><td>This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.</td></tr><tr><td style="white-space:nowrap">Questionnaire<a name="definition-resource-types-Questionnaire"> </a></td><td>Questionnaire</td><td>A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "vocab",
    },
  ],
  url: "http://hl7.org/fhir/definition-resource-types",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1057",
    },
  ],
  version: "4.3.0",
  name: "DefinitionResourceType",
  title: "DefinitionResourceType",
  status: "draft",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  description:
    "A list of all the definition resource types defined in this version of the FHIR specification.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/definition-resource-types",
  content: "complete",
  concept: [
    {
      code: "ActivityDefinition",
      display: "ActivityDefinition",
      definition:
        "This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.",
    },
    {
      code: "EventDefinition",
      display: "EventDefinition",
      definition:
        "The EventDefinition resource provides a reusable description of when a particular event can occur.",
    },
    {
      code: "Measure",
      display: "Measure",
      definition:
        "The Measure resource provides the definition of a quality measure.",
    },
    {
      code: "OperationDefinition",
      display: "OperationDefinition",
      definition:
        "A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).",
    },
    {
      code: "PlanDefinition",
      display: "PlanDefinition",
      definition:
        "This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols.",
    },
    {
      code: "Questionnaire",
      display: "Questionnaire",
      definition:
        "A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.",
    },
  ],
};
