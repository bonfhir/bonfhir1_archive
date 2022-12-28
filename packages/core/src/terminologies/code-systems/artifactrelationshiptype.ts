export const ArtifactRelationshipType = {
  resourceType: "CodeSystem",
  id: "artifact-relationship-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/artifact-relationship-type defines the following codes:</p>\n      \n      \n      <table class="codes">\n        \n        <tr>\n          \n          \n          <td style="white-space:nowrap">\n            \n            \n            <b>Code</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Display</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Definition</b>\n          \n          \n          </td>\n        \n        \n        </tr>\n        \n                <tr>\n\n          <td style="white-space:nowrap">replaces\n\n            <a name="artifact-relationship-type-replaces"> </a>\n\n          </td>\n\n          <td>Replaces</td>\n\n          <td>Replaces</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">amends\n\n            <a name="artifact-relationship-type-amends"> </a>\n\n          </td>\n\n          <td>Amends</td>\n\n          <td>Amends</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">appends\n\n            <a name="artifact-relationship-type-appends"> </a>\n\n          </td>\n\n          <td>Appends</td>\n\n          <td>Appends</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">transforms\n\n            <a name="artifact-relationship-type-transforms"> </a>\n\n          </td>\n\n          <td>Transforms</td>\n\n          <td>Transforms</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">replaced-with\n\n            <a name="artifact-relationship-type-replaced-with"> </a>\n\n          </td>\n\n          <td>Replaced with</td>\n\n          <td>Replaced with</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">amended-with\n\n            <a name="artifact-relationship-type-amended-with"> </a>\n\n          </td>\n\n          <td>Amended with</td>\n\n          <td>Amended with</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">appended-with\n\n            <a name="artifact-relationship-type-appended-with"> </a>\n\n          </td>\n\n          <td>Appended with</td>\n\n          <td>Appended with</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">transformed-with\n\n            <a name="artifact-relationship-type-transformed-with"> </a>\n\n          </td>\n\n          <td>Transformed with</td>\n\n          <td>Transformed with</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">derived-from\n\n            <a name="artifact-relationship-type-derived-from"> </a>\n\n          </td>\n\n          <td>Derived from</td>\n\n          <td>Derived from</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">transformed-into\n\n            <a name="artifact-relationship-type-transformed-into"> </a>\n\n          </td>\n\n          <td>Transformed into</td>\n\n          <td>Transformed into</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">composed-of\n\n            <a name="artifact-relationship-type-composed-of"> </a>\n\n          </td>\n\n          <td>Composed of</td>\n\n          <td>Composed of</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">part-of\n\n            <a name="artifact-relationship-type-part-of"> </a>\n\n          </td>\n\n          <td>Part of</td>\n\n          <td>Part of</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">supports\n\n            <a name="artifact-relationship-type-supports"> </a>\n\n          </td>\n\n          <td>Supports</td>\n\n          <td>Supports</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">supported-with\n\n            <a name="artifact-relationship-type-supported-with"> </a>\n\n          </td>\n\n          <td>Supported with</td>\n\n          <td>Supported with</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">depends-on\n\n            <a name="artifact-relationship-type-depends-on"> </a>\n\n          </td>\n\n          <td>Depends on</td>\n\n          <td>Depends on</td>\n\n        </tr>\n\n        <tr>\n\n          <td style="white-space:nowrap">similar-to\n\n            <a name="artifact-relationship-type-similar-to"> </a>\n\n          </td>\n\n          <td>Similar to</td>\n\n          <td>Similar to</td>\n\n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">cites\n            \n            <a name="artifact-relationship-type-cites"> </a>\n          \n          </td>\n          \n          <td>Cites</td>\n          \n          <td>Cites</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">cited-by\n            \n            <a name="artifact-relationship-type-cited-by"> </a>\n          \n          </td>\n          \n          <td>Cited by</td>\n          \n          <td>Cited by</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">retracts\n            \n            <a name="artifact-relationship-type-retracts"> </a>\n          \n          </td>\n          \n          <td>Retracts</td>\n          \n          <td>Retracts</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">retracted-by\n            \n            <a name="artifact-relationship-type-retracted-by"> </a>\n          \n          </td>\n          \n          <td>Retracted by</td>\n          \n          <td>Retracted by</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">comments-on\n            \n            <a name="artifact-relationship-type-comments-on"> </a>\n          \n          </td>\n          \n          <td>Comments On</td>\n          \n          <td>Comments On</td>\n        \n        </tr>\n\t\t\n        <tr>\n          \n          <td style="white-space:nowrap">comment-in\n            \n            <a name="artifact-relationship-type-comment-in"> </a>\n          \n          </td>\n          \n          <td>Comment In</td>\n          \n          <td>Comment In</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">correction-in\n            \n            <a name="artifact-relationship-type-correction-in"> </a>\n          \n          </td>\n          \n          <td>Correction In</td>\n          \n          <td>Correction In</td>\n        \n        </tr>\n      \n      </table>\n    \n    \n    </div>',
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
      valueInteger: 0,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/artifact-relationship-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.0",
    },
  ],
  version: "4.3.0",
  name: "ArtifactRelationshipType",
  title: "ArtifactRelationshipType",
  status: "draft",
  experimental: false,
  date: "2021-03-11T10:55:11.085+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "Artifact Relationship Type",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/artifact-relationship-type",
  content: "complete",
  concept: [
    { code: "replaces", display: "Replaces", definition: "Replaces" },
    { code: "amends", display: "Amends", definition: "Amends" },
    { code: "appends", display: "Appends", definition: "Appends" },
    { code: "transforms", display: "Transforms", definition: "Transforms" },
    {
      code: "replaced-with",
      display: "Replaced with",
      definition: "Replaced with",
    },
    {
      code: "amended-with",
      display: "Amended with",
      definition: "Amended with",
    },
    {
      code: "appended-with",
      display: "Appended with",
      definition: "Appended with",
    },
    {
      code: "transformed-with",
      display: "Transformed with",
      definition: "Transformed with",
    },
    {
      code: "derived-from",
      display: "Derived from",
      definition: "Derived from",
    },
    {
      code: "transformed-into",
      display: "Transformed into",
      definition: "Transformed into",
    },
    { code: "composed-of", display: "Composed of", definition: "Composed of" },
    { code: "part-of", display: "Part of", definition: "Part of" },
    { code: "supports", display: "Supports", definition: "Supports" },
    {
      code: "supported-with",
      display: "Supported with",
      definition: "Supported with",
    },
    { code: "depends-on", display: "Depends on", definition: "Depends on" },
    { code: "similar-to", display: "Similar to", definition: "Similar to" },
    { code: "cites", display: "Cites", definition: "Cites" },
    { code: "cited-by", display: "Cited by", definition: "Cited by" },
    { code: "retracts", display: "Retracts", definition: "Retracts" },
    {
      code: "retracted-by",
      display: "Retracted by",
      definition: "Retracted by",
    },
    { code: "comments-on", display: "Comments On", definition: "Comments On" },
    { code: "comment-in", display: "Comment In", definition: "Comment In" },
    { code: "corrects", display: "Corrects", definition: "Corrects" },
    {
      code: "correction-in",
      display: "Correction In",
      definition: "Correction In",
    },
  ],
};
