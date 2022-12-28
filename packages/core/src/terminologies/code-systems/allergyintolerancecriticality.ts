/**
 * Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.
 * http://hl7.org/fhir/allergy-intolerance-criticality
 */
export const AllergyIntoleranceCriticalityCodeSystem = {
  resourceType: "CodeSystem",
  id: "allergy-intolerance-criticality",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>AllergyIntoleranceCriticality</h2>\n      \n      <div>\n        \n        <p>Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/allergy-intolerance-criticality defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">low\n            \n            <a name="allergy-intolerance-criticality-low"> </a>\n          \n          </td>\n          \n          <td>Low Risk</td>\n          \n          <td>Worst case result of a future exposure is not assessed to be life-threatening or having high potential for organ system failure.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">high\n            \n            <a name="allergy-intolerance-criticality-high"> </a>\n          \n          </td>\n          \n          <td>High Risk</td>\n          \n          <td>Worst case result of a future exposure is assessed to be life-threatening or having high potential for organ system failure.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">unable-to-assess\n            \n            <a name="allergy-intolerance-criticality-unable-to-assess"> </a>\n          \n          </td>\n          \n          <td>Unable to Assess Risk</td>\n          \n          <td>Unable to assess the worst case result of a future exposure.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
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
  url: "http://hl7.org/fhir/allergy-intolerance-criticality",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.130",
    },
  ],
  version: "4.3.0",
  name: "AllergyIntoleranceCriticality",
  title: "AllergyIntoleranceCriticality",
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
  description:
    "Estimate of the potential clinical harm, or seriousness, of a reaction to an identified substance.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/allergy-intolerance-criticality",
  content: "complete",
  concept: [
    {
      code: "low",
      display: "Low Risk",
      definition:
        "Worst case result of a future exposure is not assessed to be life-threatening or having high potential for organ system failure.",
    },
    {
      code: "high",
      display: "High Risk",
      definition:
        "Worst case result of a future exposure is assessed to be life-threatening or having high potential for organ system failure.",
    },
    {
      code: "unable-to-assess",
      display: "Unable to Assess Risk",
      definition:
        "Unable to assess the worst case result of a future exposure.",
    },
  ],
};
