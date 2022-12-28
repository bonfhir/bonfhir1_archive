/**
 * A supported modifier for a search parameter.
 * http://hl7.org/fhir/search-modifier-code
 */
export const SearchModifierCodeCodeSystem = {
  resourceType: "CodeSystem",
  id: "search-modifier-code",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>SearchModifierCode</h2>\n      \n      <div>\n        \n        <p>A supported modifier for a search parameter.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/search-modifier-code defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">missing\n            \n            <a name="search-modifier-code-missing"> </a>\n          \n          </td>\n          \n          <td>Missing</td>\n          \n          <td>The search parameter returns resources that have a value or not.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">exact\n            \n            <a name="search-modifier-code-exact"> </a>\n          \n          </td>\n          \n          <td>Exact</td>\n          \n          <td>The search parameter returns resources that have a value that exactly matches the supplied parameter (the whole string, including casing and accents).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">contains\n            \n            <a name="search-modifier-code-contains"> </a>\n          \n          </td>\n          \n          <td>Contains</td>\n          \n          <td>The search parameter returns resources that include the supplied parameter value anywhere within the field being searched.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">not\n            \n            <a name="search-modifier-code-not"> </a>\n          \n          </td>\n          \n          <td>Not</td>\n          \n          <td>The search parameter returns resources that do not contain a match.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">text\n            \n            <a name="search-modifier-code-text"> </a>\n          \n          </td>\n          \n          <td>Text</td>\n          \n          <td>The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">in\n            \n            <a name="search-modifier-code-in"> </a>\n          \n          </td>\n          \n          <td>In</td>\n          \n          <td>The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">not-in\n            \n            <a name="search-modifier-code-not-in"> </a>\n          \n          </td>\n          \n          <td>Not In</td>\n          \n          <td>The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">below\n            \n            <a name="search-modifier-code-below"> </a>\n          \n          </td>\n          \n          <td>Below</td>\n          \n          <td>The search parameter tests whether the value in a resource is subsumed by the specified value (is-a, or hierarchical relationships).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">above\n            \n            <a name="search-modifier-code-above"> </a>\n          \n          </td>\n          \n          <td>Above</td>\n          \n          <td>The search parameter tests whether the value in a resource subsumes the specified value (is-a, or hierarchical relationships).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">type\n            \n            <a name="search-modifier-code-type"> </a>\n          \n          </td>\n          \n          <td>Type</td>\n          \n          <td>The search parameter only applies to the Resource Type specified as a modifier (e.g. the modifier is not actually :type, but :Patient etc.).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">identifier\n            \n            <a name="search-modifier-code-identifier"> </a>\n          \n          </td>\n          \n          <td>Identifier</td>\n          \n          <td>The search parameter applies to the identifier on the resource, not the reference.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ofType\n            \n            <a name="search-modifier-code-ofType"> </a>\n          \n          </td>\n          \n          <td>Of Type</td>\n          \n          <td>The search parameter has the format system|code|value, where the system and code refer to an Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
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
  url: "http://hl7.org/fhir/search-modifier-code",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.640",
    },
  ],
  version: "4.3.0",
  name: "SearchModifierCode",
  title: "SearchModifierCode",
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
  description: "A supported modifier for a search parameter.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/search-modifier-code",
  content: "complete",
  concept: [
    {
      code: "missing",
      display: "Missing",
      definition:
        "The search parameter returns resources that have a value or not.",
    },
    {
      code: "exact",
      display: "Exact",
      definition:
        "The search parameter returns resources that have a value that exactly matches the supplied parameter (the whole string, including casing and accents).",
    },
    {
      code: "contains",
      display: "Contains",
      definition:
        "The search parameter returns resources that include the supplied parameter value anywhere within the field being searched.",
    },
    {
      code: "not",
      display: "Not",
      definition:
        "The search parameter returns resources that do not contain a match.",
    },
    {
      code: "text",
      display: "Text",
      definition:
        "The search parameter is processed as a string that searches text associated with the code/value - either CodeableConcept.text, Coding.display, or Identifier.type.text.",
    },
    {
      code: "in",
      display: "In",
      definition:
        "The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set.",
    },
    {
      code: "not-in",
      display: "Not In",
      definition:
        "The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.",
    },
    {
      code: "below",
      display: "Below",
      definition:
        "The search parameter tests whether the value in a resource is subsumed by the specified value (is-a, or hierarchical relationships).",
    },
    {
      code: "above",
      display: "Above",
      definition:
        "The search parameter tests whether the value in a resource subsumes the specified value (is-a, or hierarchical relationships).",
    },
    {
      code: "type",
      display: "Type",
      definition:
        "The search parameter only applies to the Resource Type specified as a modifier (e.g. the modifier is not actually :type, but :Patient etc.).",
    },
    {
      code: "identifier",
      display: "Identifier",
      definition:
        "The search parameter applies to the identifier on the resource, not the reference.",
    },
    {
      code: "ofType",
      display: "Of Type",
      definition:
        "The search parameter has the format system|code|value, where the system and code refer to an Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.",
    },
  ],
};
