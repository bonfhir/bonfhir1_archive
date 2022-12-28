export const GoalCategory = {
  resourceType: "CodeSystem",
  id: "goal-category",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/goal-category defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">dietary<a name="goal-category-dietary"> </a></td><td>Dietary</td><td>Goals related to the consumption of food and/or beverages.</td></tr><tr><td style="white-space:nowrap">safety<a name="goal-category-safety"> </a></td><td>Safety</td><td>Goals related to the personal protection of the subject.</td></tr><tr><td style="white-space:nowrap">behavioral<a name="goal-category-behavioral"> </a></td><td>Behavioral</td><td>Goals related to the manner in which the subject acts.</td></tr><tr><td style="white-space:nowrap">nursing<a name="goal-category-nursing"> </a></td><td>Nursing</td><td>Goals related to the practice of nursing or established by nurses.</td></tr><tr><td style="white-space:nowrap">physiotherapy<a name="goal-category-physiotherapy"> </a></td><td>Physiotherapy</td><td>Goals related to the mobility and/or motor capability of the subject.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/goal-category",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1097",
    },
  ],
  version: "4.3.0",
  name: "GoalCategory",
  status: "draft",
  experimental: false,
  description:
    "Example codes for grouping goals to use for filtering or presentation.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "dietary",
      display: "Dietary",
      definition: "Goals related to the consumption of food and/or beverages.",
    },
    {
      code: "safety",
      display: "Safety",
      definition: "Goals related to the personal protection of the subject.",
    },
    {
      code: "behavioral",
      display: "Behavioral",
      definition: "Goals related to the manner in which the subject acts.",
    },
    {
      code: "nursing",
      display: "Nursing",
      definition:
        "Goals related to the practice of nursing or established by nurses.",
    },
    {
      code: "physiotherapy",
      display: "Physiotherapy",
      definition:
        "Goals related to the mobility and/or motor capability of the subject.",
    },
  ],
};
