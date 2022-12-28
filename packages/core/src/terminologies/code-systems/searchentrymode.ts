/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 * http://hl7.org/fhir/search-entry-mode
 */
export const SearchEntryModeCodeSystem = {
  resourceType: "CodeSystem",
  id: "search-entry-mode",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>SearchEntryMode</h2>\n      \n      <div>\n        \n        <p>Why an entry is in the result set - whether it\'s included as a match or because of an _include requirement, or to convey information or warning information about the search process.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/search-entry-mode defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">match\n            \n            <a name="search-entry-mode-match"> </a>\n          \n          </td>\n          \n          <td>Match</td>\n          \n          <td>This resource matched the search specification.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">include\n            \n            <a name="search-entry-mode-include"> </a>\n          \n          </td>\n          \n          <td>Include</td>\n          \n          <td>This resource is returned because it is referred to from another resource in the search set.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">outcome\n            \n            <a name="search-entry-mode-outcome"> </a>\n          \n          </td>\n          \n          <td>Outcome</td>\n          \n          <td>An OperationOutcome that provides additional information about the processing of a search.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/search-entry-mode",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.623",
    },
  ],
  version: "4.3.0",
  name: "SearchEntryMode",
  title: "SearchEntryMode",
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
  description:
    "Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/search-entry-mode",
  content: "complete",
  concept: [
    {
      code: "match",
      display: "Match",
      definition: "This resource matched the search specification.",
    },
    {
      code: "include",
      display: "Include",
      definition:
        "This resource is returned because it is referred to from another resource in the search set.",
    },
    {
      code: "outcome",
      display: "Outcome",
      definition:
        "An OperationOutcome that provides additional information about the processing of a search.",
    },
  ],
};
