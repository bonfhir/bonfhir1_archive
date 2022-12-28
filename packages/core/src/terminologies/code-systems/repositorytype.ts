/**
 * Type for access of external URI.
 * http://hl7.org/fhir/repository-type
 */
export const repositoryTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "repository-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>repositoryType</h2>\n      \n      <div>\n        \n        <p>Type for access of external URI.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/repository-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">directlink\n            \n            <a name="repository-type-directlink"> </a>\n          \n          </td>\n          \n          <td>Click and see</td>\n          \n          <td>When URL is clicked, the resource can be seen directly (by webpage or by download link format).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">openapi\n            \n            <a name="repository-type-openapi"> </a>\n          \n          </td>\n          \n          <td>The URL is the RESTful or other kind of API that can access to the result.</td>\n          \n          <td>When the API method (e.g. [base_url]/[parameter]) related with the URL of the website is executed, the resource can be seen directly (usually in JSON or XML format).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">login\n            \n            <a name="repository-type-login"> </a>\n          \n          </td>\n          \n          <td>Result cannot be access unless an account is logged in</td>\n          \n          <td>When logged into the website, the resource can be seen.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">oauth\n            \n            <a name="repository-type-oauth"> </a>\n          \n          </td>\n          \n          <td>Result need to be fetched with API and need LOGIN( or cookies are required when visiting the link of resource)</td>\n          \n          <td>When logged in and  follow the API in the website related with URL, the resource can be seen.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">other\n            \n            <a name="repository-type-other"> </a>\n          \n          </td>\n          \n          <td>Some other complicated or particular way to get resource from URL.</td>\n          \n          <td>Some other complicated or particular way to get resource from URL.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cg",
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
  url: "http://hl7.org/fhir/repository-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.231",
    },
  ],
  version: "4.3.0",
  name: "repositoryType",
  title: "repositoryType",
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
  description: "Type for access of external URI.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/repository-type",
  content: "complete",
  concept: [
    {
      code: "directlink",
      display: "Click and see",
      definition:
        "When URL is clicked, the resource can be seen directly (by webpage or by download link format).",
    },
    {
      code: "openapi",
      display:
        "The URL is the RESTful or other kind of API that can access to the result.",
      definition:
        "When the API method (e.g. [base_url]/[parameter]) related with the URL of the website is executed, the resource can be seen directly (usually in JSON or XML format).",
    },
    {
      code: "login",
      display: "Result cannot be access unless an account is logged in",
      definition: "When logged into the website, the resource can be seen.",
    },
    {
      code: "oauth",
      display:
        "Result need to be fetched with API and need LOGIN( or cookies are required when visiting the link of resource)",
      definition:
        "When logged in and  follow the API in the website related with URL, the resource can be seen.",
    },
    {
      code: "other",
      display:
        "Some other complicated or particular way to get resource from URL.",
      definition:
        "Some other complicated or particular way to get resource from URL.",
    },
  ],
};
