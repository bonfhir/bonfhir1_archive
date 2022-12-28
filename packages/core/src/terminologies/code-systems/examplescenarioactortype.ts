export const ExampleScenarioActorType = {
  resourceType: "CodeSystem",
  id: "examplescenario-actor-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>ExampleScenarioActorType</h2>\n      \n      <div>\n        \n        <p>The type of actor - system or human.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/examplescenario-actor-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">person\n            \n            <a name="examplescenario-actor-type-person"> </a>\n          \n          </td>\n          \n          <td>Person</td>\n          \n          <td>A person.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">entity\n            \n            <a name="examplescenario-actor-type-entity"> </a>\n          \n          </td>\n          \n          <td>System</td>\n          \n          <td>A system.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 0,
    },
  ],
  url: "http://hl7.org/fhir/examplescenario-actor-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.859",
    },
  ],
  version: "4.3.0",
  name: "ExampleScenarioActorType",
  title: "ExampleScenarioActorType",
  status: "draft",
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
  description: "The type of actor - system or human.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/examplescenario-actor-type",
  content: "complete",
  concept: [
    { code: "person", display: "Person", definition: "A person." },
    { code: "entity", display: "System", definition: "A system." },
  ],
};
