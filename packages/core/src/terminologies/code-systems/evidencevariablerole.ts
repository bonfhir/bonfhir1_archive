/**
 * The role that the assertion variable plays.
 * http://terminology.hl7.org/CodeSystem/variable-role
 */
export const EvidenceVariableRoleCodeSystem = {
  resourceType: "CodeSystem",
  id: "variable-role",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/variable-role defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">population\n            \n            <a name="variable-role-population"> </a>\n          \n          </td>\n          \n          <td>population</td>\n          \n          <td>variable represents a population.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">subpopulation\n            \n            <a name="variable-role-subpopulation"> </a>\n          \n          </td>\n          \n          <td>subpopulation</td>\n          \n          <td>variable represents a subpopulation.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">exposure\n            \n            <a name="variable-role-exposure"> </a>\n          \n          </td>\n          \n          <td>exposure</td>\n          \n          <td>variable represents an exposure.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">referenceExposure\n            \n            <a name="variable-role-referenceExposure"> </a>\n          \n          </td>\n          \n          <td>reference exposure</td>\n          \n          <td>variable represents a reference exposure.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">measuredVariable\n            \n            <a name="variable-role-measuredVariable"> </a>\n          \n          </td>\n          \n          <td>measured variable</td>\n          \n          <td>variable represents a measured variable.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">confounder\n            \n            <a name="variable-role-confounder"> </a>\n          \n          </td>\n          \n          <td>confounder</td>\n          \n          <td>variable represents a confounder.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://terminology.hl7.org/CodeSystem/variable-role",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1457",
    },
  ],
  version: "4.3.0",
  name: "EvidenceVariableRole",
  title: "EvidenceVariableRole",
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
  description: "The role that the assertion variable plays.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/variable-role",
  content: "complete",
  concept: [
    {
      code: "population",
      display: "population",
      definition: "variable represents a population.",
    },
    {
      code: "subpopulation",
      display: "subpopulation",
      definition: "variable represents a subpopulation.",
    },
    {
      code: "exposure",
      display: "exposure",
      definition: "variable represents an exposure.",
    },
    {
      code: "referenceExposure",
      display: "reference exposure",
      definition: "variable represents a reference exposure.",
    },
    {
      code: "measuredVariable",
      display: "measured variable",
      definition: "variable represents a measured variable.",
    },
    {
      code: "confounder",
      display: "confounder",
      definition: "variable represents a confounder.",
    },
  ],
};
