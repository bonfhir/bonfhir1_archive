export const CodeSearchSupport = {
  resourceType: "CodeSystem",
  id: "code-search-support",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>CodeSearchSupport</h2>\n      \n      <div>\n        \n        <p>The degree to which the server supports the code search parameter on ValueSet, if it is supported.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/code-search-support defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">explicit\n            \n            <a name="code-search-support-explicit"> </a>\n          \n          </td>\n          \n          <td>Explicit Codes</td>\n          \n          <td>The search for code on ValueSet only includes codes explicitly detailed on includes or expansions.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">all\n            \n            <a name="code-search-support-all"> </a>\n          \n          </td>\n          \n          <td>Implicit Codes</td>\n          \n          <td>The search for code on ValueSet only includes all codes based on the expansion of the value set.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "vocab",
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
  url: "http://hl7.org/fhir/code-search-support",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.861",
    },
  ],
  version: "4.3.0",
  name: "CodeSearchSupport",
  title: "CodeSearchSupport",
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
    "The degree to which the server supports the code search parameter on ValueSet, if it is supported.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/code-search-support",
  content: "complete",
  concept: [
    {
      code: "explicit",
      display: "Explicit Codes",
      definition:
        "The search for code on ValueSet only includes codes explicitly detailed on includes or expansions.",
    },
    {
      code: "all",
      display: "Implicit Codes",
      definition:
        "The search for code on ValueSet only includes all codes based on the expansion of the value set.",
    },
  ],
};
