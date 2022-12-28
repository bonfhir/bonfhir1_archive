/**
 * A coded concept listing the eye codes.
 * http://hl7.org/fhir/vision-eye-codes
 */
export const VisionEyesCodeSystem = {
  resourceType: "CodeSystem",
  id: "vision-eye-codes",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>VisionEyes</h2>\n      \n      <div>\n        \n        <p>A coded concept listing the eye codes.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/vision-eye-codes defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">right\n            \n            <a name="vision-eye-codes-right"> </a>\n          \n          </td>\n          \n          <td>Right Eye</td>\n          \n          <td>Right Eye.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">left\n            \n            <a name="vision-eye-codes-left"> </a>\n          \n          </td>\n          \n          <td>Left Eye</td>\n          \n          <td>Left Eye.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/vision-eye-codes",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.661",
    },
  ],
  version: "4.3.0",
  name: "VisionEyes",
  title: "VisionEyes",
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
  description: "A coded concept listing the eye codes.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/vision-eye-codes",
  content: "complete",
  concept: [
    { code: "right", display: "Right Eye", definition: "Right Eye." },
    { code: "left", display: "Left Eye", definition: "Left Eye." },
  ],
};
