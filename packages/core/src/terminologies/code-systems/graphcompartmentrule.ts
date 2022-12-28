export const GraphCompartmentRule = {
  resourceType: "CodeSystem",
  id: "graph-compartment-rule",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>GraphCompartmentRule</h2>\n      \n      <div>\n        \n        <p>How a compartment must be linked.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/graph-compartment-rule defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">identical\n            \n            <a name="graph-compartment-rule-identical"> </a>\n          \n          </td>\n          \n          <td>Identical</td>\n          \n          <td>The compartment must be identical (the same literal reference).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">matching\n            \n            <a name="graph-compartment-rule-matching"> </a>\n          \n          </td>\n          \n          <td>Matching</td>\n          \n          <td>The compartment must be the same - the record must be about the same patient, but the reference may be different.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">different\n            \n            <a name="graph-compartment-rule-different"> </a>\n          \n          </td>\n          \n          <td>Different</td>\n          \n          <td>The compartment must be different.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">custom\n            \n            <a name="graph-compartment-rule-custom"> </a>\n          \n          </td>\n          \n          <td>Custom</td>\n          \n          <td>The compartment rule is defined in the accompanying FHIRPath expression.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/graph-compartment-rule",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.281",
    },
  ],
  version: "4.3.0",
  name: "GraphCompartmentRule",
  title: "GraphCompartmentRule",
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
  description: "How a compartment must be linked.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/graph-compartment-rule",
  content: "complete",
  concept: [
    {
      code: "identical",
      display: "Identical",
      definition:
        "The compartment must be identical (the same literal reference).",
    },
    {
      code: "matching",
      display: "Matching",
      definition:
        "The compartment must be the same - the record must be about the same patient, but the reference may be different.",
    },
    {
      code: "different",
      display: "Different",
      definition: "The compartment must be different.",
    },
    {
      code: "custom",
      display: "Custom",
      definition:
        "The compartment rule is defined in the accompanying FHIRPath expression.",
    },
  ],
};
