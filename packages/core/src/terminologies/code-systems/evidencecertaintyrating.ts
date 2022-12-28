/**
 * The assessment of quality, confidence, or certainty.
 * http://terminology.hl7.org/CodeSystem/certainty-rating
 */
export const EvidenceCertaintyRatingCodeSystem = {
  resourceType: "CodeSystem",
  id: "certainty-rating",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/certainty-rating defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">high\n            \n            <a name="certainty-rating-high"> </a>\n          \n          </td>\n          \n          <td>High quality</td>\n          \n          <td>High quality evidence.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">moderate\n            \n            <a name="certainty-rating-moderate"> </a>\n          \n          </td>\n          \n          <td>Moderate quality</td>\n          \n          <td>Moderate quality evidence.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">low\n            \n            <a name="certainty-rating-low"> </a>\n          \n          </td>\n          \n          <td>Low quality</td>\n          \n          <td>Low quality evidence.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">very-low\n            \n            <a name="certainty-rating-very-low"> </a>\n          \n          </td>\n          \n          <td>Very low quality</td>\n          \n          <td>Very low quality evidence.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">no-concern\n            \n            <a name="certainty-rating-no-concern"> </a>\n          \n          </td>\n          \n          <td>no serious concern</td>\n          \n          <td>no serious concern.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">serious-concern\n            \n            <a name="certainty-rating-serious-concern"> </a>\n          \n          </td>\n          \n          <td>serious concern</td>\n          \n          <td>serious concern.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">very-serious-concern\n            \n            <a name="certainty-rating-very-serious-concern"> </a>\n          \n          </td>\n          \n          <td>very serious concern</td>\n          \n          <td>very serious concern.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">extremely-serious-concern\n            \n            <a name="certainty-rating-extremely-serious-concern"> </a>\n          \n          </td>\n          \n          <td>extremely serious concern</td>\n          \n          <td>extremely serious concern.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">present\n            \n            <a name="certainty-rating-present"> </a>\n          \n          </td>\n          \n          <td>present</td>\n          \n          <td>possible reason for increasing quality rating was checked and found to be present.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">absent\n            \n            <a name="certainty-rating-absent"> </a>\n          \n          </td>\n          \n          <td>absent</td>\n          \n          <td>possible reason for increasing quality rating was checked and found to be absent.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">no-change\n            \n            <a name="certainty-rating-no-change"> </a>\n          \n          </td>\n          \n          <td>no change to rating</td>\n          \n          <td>no change to quality rating.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">downcode1\n            \n            <a name="certainty-rating-downcode1"> </a>\n          \n          </td>\n          \n          <td>reduce rating: -1</td>\n          \n          <td>reduce quality rating by 1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">downcode2\n            \n            <a name="certainty-rating-downcode2"> </a>\n          \n          </td>\n          \n          <td>reduce rating: -2</td>\n          \n          <td>reduce quality rating by 2.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">downcode3\n            \n            <a name="certainty-rating-downcode3"> </a>\n          \n          </td>\n          \n          <td>reduce rating: -3</td>\n          \n          <td>reduce quality rating by 3.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">upcode1\n            \n            <a name="certainty-rating-upcode1"> </a>\n          \n          </td>\n          \n          <td>increase rating: +1</td>\n          \n          <td>increase quality rating by 1.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">upcode2\n            \n            <a name="certainty-rating-upcode2"> </a>\n          \n          </td>\n          \n          <td>increase rating: +2</td>\n          \n          <td>increase quality rating by 2.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
      valueInteger: 1,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/certainty-rating",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1415",
    },
  ],
  version: "4.3.0",
  name: "EvidenceCertaintyRating",
  title: "EvidenceCertaintyRating",
  status: "draft",
  experimental: false,
  date: "2020-12-28T16:55:11+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "The assessment of quality, confidence, or certainty.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/certainty-rating",
  content: "complete",
  concept: [
    {
      code: "high",
      display: "High quality",
      definition: "High quality evidence.",
    },
    {
      code: "moderate",
      display: "Moderate quality",
      definition: "Moderate quality evidence.",
    },
    {
      code: "low",
      display: "Low quality",
      definition: "Low quality evidence.",
    },
    {
      code: "very-low",
      display: "Very low quality",
      definition: "Very low quality evidence.",
    },
    {
      code: "no-concern",
      display: "no serious concern",
      definition: "no serious concern.",
    },
    {
      code: "serious-concern",
      display: "serious concern",
      definition: "serious concern.",
    },
    {
      code: "very-serious-concern",
      display: "very serious concern",
      definition: "very serious concern.",
    },
    {
      code: "extremely-serious-concern",
      display: "extremely serious concern",
      definition: "extremely serious concern.",
    },
    {
      code: "present",
      display: "present",
      definition:
        "possible reason for increasing quality rating was checked and found to be present.",
    },
    {
      code: "absent",
      display: "absent",
      definition:
        "possible reason for increasing quality rating was checked and found to be absent.",
    },
    {
      code: "no-change",
      display: "no change to rating",
      definition: "no change to quality rating.",
    },
    {
      code: "downcode1",
      display: "reduce rating: -1",
      definition: "reduce quality rating by 1.",
    },
    {
      code: "downcode2",
      display: "reduce rating: -2",
      definition: "reduce quality rating by 2.",
    },
    {
      code: "downcode3",
      display: "reduce rating: -3",
      definition: "reduce quality rating by 3.",
    },
    {
      code: "upcode1",
      display: "increase rating: +1",
      definition: "increase quality rating by 1.",
    },
    {
      code: "upcode2",
      display: "increase rating: +2",
      definition: "increase quality rating by 2.",
    },
  ],
};
