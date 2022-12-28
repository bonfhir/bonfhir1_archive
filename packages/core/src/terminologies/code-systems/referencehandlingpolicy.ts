/**
 * A set of flags that defines how references are supported.
 * http://hl7.org/fhir/reference-handling-policy
 */
export const ReferenceHandlingPolicyCodeSystem = {
  resourceType: "CodeSystem",
  id: "reference-handling-policy",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>ReferenceHandlingPolicy</h2>\n      \n      <div>\n        \n        <p>A set of flags that defines how references are supported.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/reference-handling-policy defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">literal\n            \n            <a name="reference-handling-policy-literal"> </a>\n          \n          </td>\n          \n          <td>Literal References</td>\n          \n          <td>The server supports and populates Literal references (i.e. using Reference.reference) where they are known (this code does not guarantee that all references are literal; see \'enforced\').</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">logical\n            \n            <a name="reference-handling-policy-logical"> </a>\n          \n          </td>\n          \n          <td>Logical References</td>\n          \n          <td>The server allows logical references (i.e. using Reference.identifier).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">resolves\n            \n            <a name="reference-handling-policy-resolves"> </a>\n          \n          </td>\n          \n          <td>Resolves References</td>\n          \n          <td>The server will attempt to resolve logical references to literal references - i.e. converting Reference.identifier to Reference.reference (if resolution fails, the server may still accept resources; see logical).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">enforced\n            \n            <a name="reference-handling-policy-enforced"> </a>\n          \n          </td>\n          \n          <td>Reference Integrity Enforced</td>\n          \n          <td>The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">local\n            \n            <a name="reference-handling-policy-local"> </a>\n          \n          </td>\n          \n          <td>Local References Only</td>\n          \n          <td>The server does not support references that point to other servers.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
  ],
  url: "http://hl7.org/fhir/reference-handling-policy",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.203",
    },
  ],
  version: "4.3.0",
  name: "ReferenceHandlingPolicy",
  title: "ReferenceHandlingPolicy",
  status: "active",
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
  description: "A set of flags that defines how references are supported.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/reference-handling-policy",
  content: "complete",
  concept: [
    {
      code: "literal",
      display: "Literal References",
      definition:
        "The server supports and populates Literal references (i.e. using Reference.reference) where they are known (this code does not guarantee that all references are literal; see 'enforced').",
    },
    {
      code: "logical",
      display: "Logical References",
      definition:
        "The server allows logical references (i.e. using Reference.identifier).",
    },
    {
      code: "resolves",
      display: "Resolves References",
      definition:
        "The server will attempt to resolve logical references to literal references - i.e. converting Reference.identifier to Reference.reference (if resolution fails, the server may still accept resources; see logical).",
    },
    {
      code: "enforced",
      display: "Reference Integrity Enforced",
      definition:
        "The server enforces that references have integrity - e.g. it ensures that references can always be resolved. This is typically the case for clinical record systems, but often not the case for middleware/proxy systems.",
    },
    {
      code: "local",
      display: "Local References Only",
      definition:
        "The server does not support references that point to other servers.",
    },
  ],
};
