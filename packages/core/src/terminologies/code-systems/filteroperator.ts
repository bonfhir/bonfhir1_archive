/**
 * The kind of operation to perform as a part of a property based filter.
 * http://hl7.org/fhir/filter-operator
 */
export const FilterOperatorCodeSystem = {
  resourceType: "CodeSystem",
  id: "filter-operator",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "extensions",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>FilterOperator</h2>\n      \n      <div>\n        \n        <p>The kind of operation to perform as a part of a property based filter.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/filter-operator defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Comments</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">=\n            \n            <a name="filter-operator-.61"> </a>\n          \n          </td>\n          \n          <td>Equals</td>\n          \n          <td>The specified property of the code equals the provided value.</td>\n          \n          <td/>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">is-a\n            \n            <a name="filter-operator-is-a"> </a>\n          \n          </td>\n          \n          <td>Is A (by subsumption)</td>\n          \n          <td>Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, including the provided concept itself (include descendant codes and self).</td>\n          \n          <td>The definition of is-a is that all the properties of the value are true for the specified property of the code, which means that a code has an is-a relationship with itself. To exclude the root code, use descendent-of</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">descendent-of\n            \n            <a name="filter-operator-descendent-of"> </a>\n          \n          </td>\n          \n          <td>Descendent Of (by subsumption)</td>\n          \n          <td>Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, excluding the provided concept itself i.e. include descendant codes only).</td>\n          \n          <td>The definition of is-a is that all the properties of the value are true for the specified property of the code. \n\nSpelling note: &quot;descendant&quot; is a more correct spelling, but the spelling &quot;descendent&quot; is maintained in the code for backwards compatibility reasons</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">is-not-a\n            \n            <a name="filter-operator-is-not-a"> </a>\n          \n          </td>\n          \n          <td>Not (Is A) (by subsumption)</td>\n          \n          <td>The specified property of the code does not have an is-a relationship with the provided value.</td>\n          \n          <td/>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">regex\n            \n            <a name="filter-operator-regex"> </a>\n          \n          </td>\n          \n          <td>Regular Expression</td>\n          \n          <td>The specified property of the code  matches the regex specified in the provided value.</td>\n          \n          <td/>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">in\n            \n            <a name="filter-operator-in"> </a>\n          \n          </td>\n          \n          <td>In Set</td>\n          \n          <td>The specified property of the code is in the set of codes or concepts specified in the provided value (comma separated list).</td>\n          \n          <td/>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">not-in\n            \n            <a name="filter-operator-not-in"> </a>\n          \n          </td>\n          \n          <td>Not in Set</td>\n          \n          <td>The specified property of the code is not in the set of codes or concepts specified in the provided value (comma separated list).</td>\n          \n          <td/>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">generalizes\n            \n            <a name="filter-operator-generalizes"> </a>\n          \n          </td>\n          \n          <td>Generalizes (by Subsumption)</td>\n          \n          <td>Includes all concept ids that have a transitive is-a relationship from the concept Id provided as the value, including the provided concept itself (i.e. include ancestor codes and self).</td>\n          \n          <td>The definition of is-a is that all the properties of the value are true for the specified property of the code, which means that a code has an is-a relationship with itself. To exclude the root code, add it explicitly to as an exclude</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">exists\n            \n            <a name="filter-operator-exists"> </a>\n          \n          </td>\n          \n          <td>Exists</td>\n          \n          <td>The specified property of the code has at least one value (if the specified value is true; if the specified value is false, then matches when the specified property of the code has no values).</td>\n          \n          <td/>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "vocab",
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
  url: "http://hl7.org/fhir/filter-operator",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.479",
    },
  ],
  version: "4.3.0",
  name: "FilterOperator",
  title: "FilterOperator",
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
    "The kind of operation to perform as a part of a property based filter.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/filter-operator",
  content: "complete",
  concept: [
    {
      code: "=",
      display: "Equals",
      definition:
        "The specified property of the code equals the provided value.",
    },
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments",
          valueString:
            "The definition of is-a is that all the properties of the value are true for the specified property of the code, which means that a code has an is-a relationship with itself. To exclude the root code, use descendent-of",
        },
      ],
      code: "is-a",
      display: "Is A (by subsumption)",
      definition:
        "Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, including the provided concept itself (include descendant codes and self).",
    },
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments",
          valueString:
            'The definition of is-a is that all the properties of the value are true for the specified property of the code. \n\nSpelling note: "descendant" is a more correct spelling, but the spelling "descendent" is maintained in the code for backwards compatibility reasons',
        },
      ],
      code: "descendent-of",
      display: "Descendent Of (by subsumption)",
      definition:
        "Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, excluding the provided concept itself i.e. include descendant codes only).",
    },
    {
      code: "is-not-a",
      display: "Not (Is A) (by subsumption)",
      definition:
        "The specified property of the code does not have an is-a relationship with the provided value.",
    },
    {
      code: "regex",
      display: "Regular Expression",
      definition:
        "The specified property of the code  matches the regex specified in the provided value.",
    },
    {
      code: "in",
      display: "In Set",
      definition:
        "The specified property of the code is in the set of codes or concepts specified in the provided value (comma separated list).",
    },
    {
      code: "not-in",
      display: "Not in Set",
      definition:
        "The specified property of the code is not in the set of codes or concepts specified in the provided value (comma separated list).",
    },
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments",
          valueString:
            "The definition of is-a is that all the properties of the value are true for the specified property of the code, which means that a code has an is-a relationship with itself. To exclude the root code, add it explicitly to as an exclude",
        },
      ],
      code: "generalizes",
      display: "Generalizes (by Subsumption)",
      definition:
        "Includes all concept ids that have a transitive is-a relationship from the concept Id provided as the value, including the provided concept itself (i.e. include ancestor codes and self).",
    },
    {
      code: "exists",
      display: "Exists",
      definition:
        "The specified property of the code has at least one value (if the specified value is true; if the specified value is false, then matches when the specified property of the code has no values).",
    },
  ],
};
