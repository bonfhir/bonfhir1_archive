/**
 * Codes identifying the lifecycle stage of a product.
 * http://hl7.org/fhir/nutritionproduct-status
 */
export const NutritionProductStatusCodeSystem = {
  resourceType: "CodeSystem",
  id: "nutritionproduct-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://hl7.org/fhir/nutritionproduct-status defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">active\n            \n            <a name="nutritionproduct-status-active"> </a>\n          \n          </td>\n          \n          <td>Active</td>\n          \n          <td>The product can be used.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">inactive\n            \n            <a name="nutritionproduct-status-inactive"> </a>\n          \n          </td>\n          \n          <td>Inactive</td>\n          \n          <td>The product is not expected or allowed to be used.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">entered-in-error\n            \n            <a name="nutritionproduct-status-entered-in-error"> </a>\n          \n          </td>\n          \n          <td>Entered in Error</td>\n          \n          <td>This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be &quot;cancelled&quot; rather than &quot;entered-in-error&quot;.).</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/nutritionproduct-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1530",
    },
  ],
  version: "4.3.0",
  name: "NutritionProductStatus",
  title: "NutritionProductStatus",
  status: "draft",
  experimental: false,
  date: "2021-01-05T10:01:24+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "Codes identifying the lifecycle stage of a product.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/nutritionproduct-status",
  content: "complete",
  concept: [
    {
      code: "active",
      display: "Active",
      definition: "The product can be used.",
    },
    {
      code: "inactive",
      display: "Inactive",
      definition: "The product is not expected or allowed to be used.",
    },
    {
      code: "entered-in-error",
      display: "Entered in Error",
      definition:
        'This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).',
    },
  ],
};
