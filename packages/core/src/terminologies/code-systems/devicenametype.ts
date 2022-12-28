/**
 * The type of name the device is referred by.
 * http://hl7.org/fhir/device-nametype
 */
export const DeviceNameTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "device-nametype",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>DeviceNameType</h2>\n      \n      <div>\n        \n        <p>The type of name the device is referred by.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/device-nametype defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">udi-label-name\n            \n            <a name="device-nametype-udi-label-name"> </a>\n          \n          </td>\n          \n          <td>UDI Label name</td>\n          \n          <td>UDI Label name.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">user-friendly-name\n            \n            <a name="device-nametype-user-friendly-name"> </a>\n          \n          </td>\n          \n          <td>User Friendly name</td>\n          \n          <td>User Friendly name.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">patient-reported-name\n            \n            <a name="device-nametype-patient-reported-name"> </a>\n          \n          </td>\n          \n          <td>Patient Reported name</td>\n          \n          <td>Patient Reported name.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">manufacturer-name\n            \n            <a name="device-nametype-manufacturer-name"> </a>\n          \n          </td>\n          \n          <td>Manufacturer name</td>\n          \n          <td>Manufacturer name.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">model-name\n            \n            <a name="device-nametype-model-name"> </a>\n          \n          </td>\n          \n          <td>Model name</td>\n          \n          <td>Model name.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">other\n            \n            <a name="device-nametype-other"> </a>\n          \n          </td>\n          \n          <td>other</td>\n          \n          <td>other.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/device-nametype",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1084",
    },
  ],
  version: "4.3.0",
  name: "DeviceNameType",
  title: "DeviceNameType",
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
  description: "The type of name the device is referred by.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/device-nametype",
  content: "complete",
  concept: [
    {
      code: "udi-label-name",
      display: "UDI Label name",
      definition: "UDI Label name.",
    },
    {
      code: "user-friendly-name",
      display: "User Friendly name",
      definition: "User Friendly name.",
    },
    {
      code: "patient-reported-name",
      display: "Patient Reported name",
      definition: "Patient Reported name.",
    },
    {
      code: "manufacturer-name",
      display: "Manufacturer name",
      definition: "Manufacturer name.",
    },
    { code: "model-name", display: "Model name", definition: "Model name." },
    { code: "other", display: "other", definition: "other." },
  ],
};
