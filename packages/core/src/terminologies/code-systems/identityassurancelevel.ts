export const IdentityAssuranceLevel = {
  resourceType: "CodeSystem",
  id: "identity-assuranceLevel",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>IdentityAssuranceLevel</h2>\n      \n      <div>\n        \n        <p>The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/identity-assuranceLevel defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">level1\n            \n            <a name="identity-assuranceLevel-level1"> </a>\n          \n          </td>\n          \n          <td>Level 1</td>\n          \n          <td>Little or no confidence in the asserted identity\'s accuracy.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">level2\n            \n            <a name="identity-assuranceLevel-level2"> </a>\n          \n          </td>\n          \n          <td>Level 2</td>\n          \n          <td>Some confidence in the asserted identity\'s accuracy.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">level3\n            \n            <a name="identity-assuranceLevel-level3"> </a>\n          \n          </td>\n          \n          <td>Level 3</td>\n          \n          <td>High confidence in the asserted identity\'s accuracy.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">level4\n            \n            <a name="identity-assuranceLevel-level4"> </a>\n          \n          </td>\n          \n          <td>Level 4</td>\n          \n          <td>Very high confidence in the asserted identity\'s accuracy.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/identity-assuranceLevel",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.657",
    },
  ],
  version: "4.3.0",
  name: "IdentityAssuranceLevel",
  title: "IdentityAssuranceLevel",
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
    "The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/identity-assuranceLevel",
  content: "complete",
  concept: [
    {
      code: "level1",
      display: "Level 1",
      definition:
        "Little or no confidence in the asserted identity's accuracy.",
    },
    {
      code: "level2",
      display: "Level 2",
      definition: "Some confidence in the asserted identity's accuracy.",
    },
    {
      code: "level3",
      display: "Level 3",
      definition: "High confidence in the asserted identity's accuracy.",
    },
    {
      code: "level4",
      display: "Level 4",
      definition: "Very high confidence in the asserted identity's accuracy.",
    },
  ],
};
