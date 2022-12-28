export const ConditionCategoryCodes = {
  resourceType: "CodeSystem",
  id: "condition-category",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/condition-category defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">problem-list-item<a name="condition-category-problem-list-item"> </a></td><td>Problem List Item</td><td>An item on a problem list that can be managed over time and can be expressed by a practitioner (e.g. physician, nurse), patient, or related person.</td></tr><tr><td style="white-space:nowrap">encounter-diagnosis<a name="condition-category-encounter-diagnosis"> </a></td><td>Encounter Diagnosis</td><td>A point in time diagnosis (e.g. from a physician or nurse) in context of an encounter.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/condition-category",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1073",
    },
  ],
  version: "4.3.0",
  name: "ConditionCategoryCodes",
  title: "Condition Category Codes",
  status: "draft",
  experimental: false,
  description: "Example value set for Condition Categories.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/condition-category",
  content: "complete",
  concept: [
    {
      code: "problem-list-item",
      display: "Problem List Item",
      definition:
        "An item on a problem list that can be managed over time and can be expressed by a practitioner (e.g. physician, nurse), patient, or related person.",
    },
    {
      code: "encounter-diagnosis",
      display: "Encounter Diagnosis",
      definition:
        "A point in time diagnosis (e.g. from a physician or nurse) in context of an encounter.",
    },
  ],
};
