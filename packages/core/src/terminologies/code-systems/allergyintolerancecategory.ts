/**
 * Category of an identified substance associated with allergies or intolerances.
 * http://hl7.org/fhir/allergy-intolerance-category
 */
export const AllergyIntoleranceCategoryCodeSystem = {
  resourceType: "CodeSystem",
  id: "allergy-intolerance-category",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>AllergyIntoleranceCategory</h2>\n      \n      <div>\n        \n        <p>Category of an identified substance associated with allergies or intolerances.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/allergy-intolerance-category defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">food\n            \n            <a name="allergy-intolerance-category-food"> </a>\n          \n          </td>\n          \n          <td>Food</td>\n          \n          <td>Any substance consumed to provide nutritional support for the body.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">medication\n            \n            <a name="allergy-intolerance-category-medication"> </a>\n          \n          </td>\n          \n          <td>Medication</td>\n          \n          <td>Substances administered to achieve a physiological effect.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">environment\n            \n            <a name="allergy-intolerance-category-environment"> </a>\n          \n          </td>\n          \n          <td>Environment</td>\n          \n          <td>Any substances that are encountered in the environment, including any substance not already classified as food, medication, or biologic.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">biologic\n            \n            <a name="allergy-intolerance-category-biologic"> </a>\n          \n          </td>\n          \n          <td>Biologic</td>\n          \n          <td>A preparation that is synthesized from living organisms or their products, especially a human or animal protein, such as a hormone or antitoxin, that is used as a diagnostic, preventive, or therapeutic agent. Examples of biologic medications include: vaccines; allergenic extracts, which are used for both diagnosis and treatment (for example, allergy shots); gene therapies; cellular therapies.  There are other biologic products, such as tissues, which are not typically associated with allergies.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
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
  url: "http://hl7.org/fhir/allergy-intolerance-category",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.134",
    },
  ],
  version: "4.3.0",
  name: "AllergyIntoleranceCategory",
  title: "AllergyIntoleranceCategory",
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
    "Category of an identified substance associated with allergies or intolerances.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/allergy-intolerance-category",
  content: "complete",
  concept: [
    {
      code: "food",
      display: "Food",
      definition:
        "Any substance consumed to provide nutritional support for the body.",
    },
    {
      code: "medication",
      display: "Medication",
      definition: "Substances administered to achieve a physiological effect.",
    },
    {
      code: "environment",
      display: "Environment",
      definition:
        "Any substances that are encountered in the environment, including any substance not already classified as food, medication, or biologic.",
    },
    {
      code: "biologic",
      display: "Biologic",
      definition:
        "A preparation that is synthesized from living organisms or their products, especially a human or animal protein, such as a hormone or antitoxin, that is used as a diagnostic, preventive, or therapeutic agent. Examples of biologic medications include: vaccines; allergenic extracts, which are used for both diagnosis and treatment (for example, allergy shots); gene therapies; cellular therapies.  There are other biologic products, such as tissues, which are not typically associated with allergies.",
    },
  ],
};
