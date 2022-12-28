export const ActionGroupingBehavior = {
  resourceType: "CodeSystem",
  id: "action-grouping-behavior",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://hl7.org/fhir/action-grouping-behavior defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">visual-group\n            \n            <a name="action-grouping-behavior-visual-group"> </a>\n          \n          </td>\n          \n          <td>Visual Group</td>\n          \n          <td>Any group marked with this behavior should be displayed as a visual group to the end user.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">logical-group\n            \n            <a name="action-grouping-behavior-logical-group"> </a>\n          \n          </td>\n          \n          <td>Logical Group</td>\n          \n          <td>A group with this behavior logically groups its sub-elements, and may be shown as a visual group to the end user, but it is not required to do so.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">sentence-group\n            \n            <a name="action-grouping-behavior-sentence-group"> </a>\n          \n          </td>\n          \n          <td>Sentence Group</td>\n          \n          <td>A group of related alternative actions is a sentence group if the target referenced by the action is the same in all the actions and each action simply constitutes a different variation on how to specify the details for the target. For example, two actions that could be in a SentenceGroup are &quot;aspirin, 500 mg, 2 times per day&quot; and &quot;aspirin, 300 mg, 3 times per day&quot;. In both cases, aspirin is the target referenced by the action, and the two actions represent different options for how aspirin might be ordered for the patient. Note that a SentenceGroup would almost always have an associated selection behavior of &quot;AtMostOne&quot;, unless it\'s a required action, in which case, it would be &quot;ExactlyOne&quot;.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
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
  url: "http://hl7.org/fhir/action-grouping-behavior",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.800",
    },
  ],
  version: "4.3.0",
  name: "ActionGroupingBehavior",
  title: "ActionGroupingBehavior",
  status: "draft",
  experimental: false,
  date: "2021-01-05T10:01:24+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "Defines organization behavior of a group.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/action-grouping-behavior",
  content: "complete",
  concept: [
    {
      code: "visual-group",
      display: "Visual Group",
      definition:
        "Any group marked with this behavior should be displayed as a visual group to the end user.",
    },
    {
      code: "logical-group",
      display: "Logical Group",
      definition:
        "A group with this behavior logically groups its sub-elements, and may be shown as a visual group to the end user, but it is not required to do so.",
    },
    {
      code: "sentence-group",
      display: "Sentence Group",
      definition:
        'A group of related alternative actions is a sentence group if the target referenced by the action is the same in all the actions and each action simply constitutes a different variation on how to specify the details for the target. For example, two actions that could be in a SentenceGroup are "aspirin, 500 mg, 2 times per day" and "aspirin, 300 mg, 3 times per day". In both cases, aspirin is the target referenced by the action, and the two actions represent different options for how aspirin might be ordered for the patient. Note that a SentenceGroup would almost always have an associated selection behavior of "AtMostOne", unless it\'s a required action, in which case, it would be "ExactlyOne".',
    },
  ],
};
