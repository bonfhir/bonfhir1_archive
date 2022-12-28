export const GoalAchievementStatus = {
  resourceType: "CodeSystem",
  id: "goal-achievement",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/goal-achievement defines the following codes:</p><table class="codes"><tr><td><b>Lvl</b></td><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td>1</td><td style="white-space:nowrap">in-progress<a name="goal-achievement-in-progress"> </a></td><td>In Progress</td><td>The goal is being sought but has not yet been reached. (Also applies if the goal was reached in the past but there has been regression and the goal is again being sought).</td></tr><tr><td>2</td><td style="white-space:nowrap">  improving<a name="goal-achievement-improving"> </a></td><td>Improving</td><td>The goal is being sought, and is progressing.</td></tr><tr><td>2</td><td style="white-space:nowrap">  worsening<a name="goal-achievement-worsening"> </a></td><td>Worsening</td><td>The goal is being sought, but is regressing.</td></tr><tr><td>2</td><td style="white-space:nowrap">  no-change<a name="goal-achievement-no-change"> </a></td><td>No Change</td><td>The goal is being sought, but the trend is flat.</td></tr><tr><td>1</td><td style="white-space:nowrap">achieved<a name="goal-achievement-achieved"> </a></td><td>Achieved</td><td>The goal has been met.</td></tr><tr><td>2</td><td style="white-space:nowrap">  sustaining<a name="goal-achievement-sustaining"> </a></td><td>Sustaining</td><td>The goal has been met, but ongoing activity is needed to sustain the goal objective.</td></tr><tr><td>1</td><td style="white-space:nowrap">not-achieved<a name="goal-achievement-not-achieved"> </a></td><td>Not Achieved</td><td>The goal has not been met and there might or might not have been progress towards target.</td></tr><tr><td>2</td><td style="white-space:nowrap">  no-progress<a name="goal-achievement-no-progress"> </a></td><td>No Progress</td><td>The goal has not been met and little to no progress towards target.</td></tr><tr><td>2</td><td style="white-space:nowrap">  not-attainable<a name="goal-achievement-not-attainable"> </a></td><td>Not Attainable</td><td>The goal is not possible to be met.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/goal-achievement",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1375",
    },
  ],
  version: "4.3.0",
  name: "GoalAchievementStatus",
  status: "draft",
  experimental: false,
  description:
    "Describes the progression, or lack thereof, towards the goal against the target.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/goal-achievement",
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    {
      code: "in-progress",
      display: "In Progress",
      definition:
        "The goal is being sought but has not yet been reached. (Also applies if the goal was reached in the past but there has been regression and the goal is again being sought).",
      concept: [
        {
          code: "improving",
          display: "Improving",
          definition: "The goal is being sought, and is progressing.",
        },
        {
          code: "worsening",
          display: "Worsening",
          definition: "The goal is being sought, but is regressing.",
        },
        {
          code: "no-change",
          display: "No Change",
          definition: "The goal is being sought, but the trend is flat.",
        },
      ],
    },
    {
      code: "achieved",
      display: "Achieved",
      definition: "The goal has been met.",
      concept: [
        {
          code: "sustaining",
          display: "Sustaining",
          definition:
            "The goal has been met, but ongoing activity is needed to sustain the goal objective.",
        },
      ],
    },
    {
      code: "not-achieved",
      display: "Not Achieved",
      definition:
        "The goal has not been met and there might or might not have been progress towards target.",
      concept: [
        {
          code: "no-progress",
          display: "No Progress",
          definition:
            "The goal has not been met and little to no progress towards target.",
        },
        {
          code: "not-attainable",
          display: "Not Attainable",
          definition: "The goal is not possible to be met.",
        },
      ],
    },
  ],
};
