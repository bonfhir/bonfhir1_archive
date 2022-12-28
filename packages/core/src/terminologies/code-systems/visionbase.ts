/**
 * A coded concept listing the base codes.
 * http://hl7.org/fhir/vision-base-codes
 */
export const VisionBaseCodeSystem = {
  resourceType: "CodeSystem",
  id: "vision-base-codes",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>VisionBase</h2>\n      \n      <div>\n        \n        <p>A coded concept listing the base codes.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/vision-base-codes defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">up\n            \n            <a name="vision-base-codes-up"> </a>\n          \n          </td>\n          \n          <td>Up</td>\n          \n          <td>top.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">down\n            \n            <a name="vision-base-codes-down"> </a>\n          \n          </td>\n          \n          <td>Down</td>\n          \n          <td>bottom.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">in\n            \n            <a name="vision-base-codes-in"> </a>\n          \n          </td>\n          \n          <td>In</td>\n          \n          <td>inner edge.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">out\n            \n            <a name="vision-base-codes-out"> </a>\n          \n          </td>\n          \n          <td>Out</td>\n          \n          <td>outer edge.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/vision-base-codes",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.663",
    },
  ],
  version: "4.3.0",
  name: "VisionBase",
  title: "VisionBase",
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
  description: "A coded concept listing the base codes.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/vision-base-codes",
  content: "complete",
  concept: [
    { code: "up", display: "Up", definition: "top." },
    { code: "down", display: "Down", definition: "bottom." },
    { code: "in", display: "In", definition: "inner edge." },
    { code: "out", display: "Out", definition: "outer edge." },
  ],
};
