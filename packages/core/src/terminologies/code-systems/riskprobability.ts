export const RiskProbability = {
  resourceType: "CodeSystem",
  id: "risk-probability",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/risk-probability defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">negligible<a name="risk-probability-negligible"> </a></td><td>Negligible likelihood</td><td>The specified outcome is exceptionally unlikely.</td></tr><tr><td style="white-space:nowrap">low<a name="risk-probability-low"> </a></td><td>Low likelihood</td><td>The specified outcome is possible but unlikely.</td></tr><tr><td style="white-space:nowrap">moderate<a name="risk-probability-moderate"> </a></td><td>Moderate likelihood</td><td>The specified outcome has a reasonable likelihood of occurrence.</td></tr><tr><td style="white-space:nowrap">high<a name="risk-probability-high"> </a></td><td>High likelihood</td><td>The specified outcome is more likely to occur than not.</td></tr><tr><td style="white-space:nowrap">certain<a name="risk-probability-certain"> </a></td><td>Certain</td><td>The specified outcome is effectively guaranteed.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/risk-probability",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1133",
    },
  ],
  version: "4.3.0",
  name: "RiskProbability",
  title: "Risk Probability",
  status: "draft",
  experimental: false,
  description:
    "Codes representing the likelihood of a particular outcome in a risk assessment.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "negligible",
      display: "Negligible likelihood",
      definition: "The specified outcome is exceptionally unlikely.",
    },
    {
      code: "low",
      display: "Low likelihood",
      definition: "The specified outcome is possible but unlikely.",
    },
    {
      code: "moderate",
      display: "Moderate likelihood",
      definition:
        "The specified outcome has a reasonable likelihood of occurrence.",
    },
    {
      code: "high",
      display: "High likelihood",
      definition: "The specified outcome is more likely to occur than not.",
    },
    {
      code: "certain",
      display: "Certain",
      definition: "The specified outcome is effectively guaranteed.",
    },
  ],
};
