export const BiologicallyDerivedProductStatus = {
  resourceType: "CodeSystem",
  id: "product-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>BiologicallyDerivedProductStatus</h2>\n      \n      <div>\n        \n        <p>Biologically Derived Product Status.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/product-status defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">available\n            \n            <a name="product-status-available"> </a>\n          \n          </td>\n          \n          <td>Available</td>\n          \n          <td>Product is currently available for use.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">unavailable\n            \n            <a name="product-status-unavailable"> </a>\n          \n          </td>\n          \n          <td>Unavailable</td>\n          \n          <td>Product is not currently available for use.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
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
  url: "http://hl7.org/fhir/product-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.903",
    },
  ],
  version: "4.3.0",
  name: "BiologicallyDerivedProductStatus",
  title: "BiologicallyDerivedProductStatus",
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
  description: "Biologically Derived Product Status.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/product-status",
  content: "complete",
  concept: [
    {
      code: "available",
      display: "Available",
      definition: "Product is currently available for use.",
    },
    {
      code: "unavailable",
      display: "Unavailable",
      definition: "Product is not currently available for use.",
    },
  ],
};
