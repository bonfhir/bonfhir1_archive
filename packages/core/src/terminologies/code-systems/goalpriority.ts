/**
 * Indicates the level of importance associated with reaching or sustaining a goal.
 * http://terminology.hl7.org/CodeSystem/goal-priority
 */
export const GoalPriorityCodeSystem = {
  resourceType: "CodeSystem",
  id: "goal-priority",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/goal-priority defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">high-priority<a name="goal-priority-high-priority"> </a></td><td>High Priority</td><td>Indicates that the goal is of considerable importance and should be a primary focus of care delivery.</td></tr><tr><td style="white-space:nowrap">medium-priority<a name="goal-priority-medium-priority"> </a></td><td>Medium Priority</td><td>Indicates that the goal has a reasonable degree of importance and that concrete action should be taken towards the goal.  Attainment is not as critical as high-priority goals.</td></tr><tr><td style="white-space:nowrap">low-priority<a name="goal-priority-low-priority"> </a></td><td>Low Priority</td><td>The goal is desirable but is not sufficiently important to devote significant resources to.  Achievement of the goal may be sought when incidental to achieving other goals.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/goal-priority",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1096",
    },
  ],
  version: "4.3.0",
  name: "GoalPriority",
  status: "draft",
  experimental: false,
  description:
    "Indicates the level of importance associated with reaching or sustaining a goal.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/goal-priority",
  content: "complete",
  concept: [
    {
      code: "high-priority",
      display: "High Priority",
      definition:
        "Indicates that the goal is of considerable importance and should be a primary focus of care delivery.",
    },
    {
      code: "medium-priority",
      display: "Medium Priority",
      definition:
        "Indicates that the goal has a reasonable degree of importance and that concrete action should be taken towards the goal.  Attainment is not as critical as high-priority goals.",
    },
    {
      code: "low-priority",
      display: "Low Priority",
      definition:
        "The goal is desirable but is not sufficiently important to devote significant resources to.  Achievement of the goal may be sought when incidental to achieving other goals.",
    },
  ],
};
