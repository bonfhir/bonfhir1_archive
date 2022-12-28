export const DeviceMetricCategory = {
  resourceType: "CodeSystem",
  id: "metric-category",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>DeviceMetricCategory</h2>\n      \n      <div>\n        \n        <p>Describes the category of the metric.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/metric-category defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">measurement\n            \n            <a name="metric-category-measurement"> </a>\n          \n          </td>\n          \n          <td>Measurement</td>\n          \n          <td>DeviceObservations generated for this DeviceMetric are measured.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">setting\n            \n            <a name="metric-category-setting"> </a>\n          \n          </td>\n          \n          <td>Setting</td>\n          \n          <td>DeviceObservations generated for this DeviceMetric is a setting that will influence the behavior of the Device.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">calculation\n            \n            <a name="metric-category-calculation"> </a>\n          \n          </td>\n          \n          <td>Calculation</td>\n          \n          <td>DeviceObservations generated for this DeviceMetric are calculated.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">unspecified\n            \n            <a name="metric-category-unspecified"> </a>\n          \n          </td>\n          \n          <td>Unspecified</td>\n          \n          <td>The category of this DeviceMetric is unspecified.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "dev",
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
  url: "http://hl7.org/fhir/metric-category",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.649",
    },
  ],
  version: "4.3.0",
  name: "DeviceMetricCategory",
  title: "DeviceMetricCategory",
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
  description: "Describes the category of the metric.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/metric-category",
  content: "complete",
  concept: [
    {
      code: "measurement",
      display: "Measurement",
      definition:
        "DeviceObservations generated for this DeviceMetric are measured.",
    },
    {
      code: "setting",
      display: "Setting",
      definition:
        "DeviceObservations generated for this DeviceMetric is a setting that will influence the behavior of the Device.",
    },
    {
      code: "calculation",
      display: "Calculation",
      definition:
        "DeviceObservations generated for this DeviceMetric are calculated.",
    },
    {
      code: "unspecified",
      display: "Unspecified",
      definition: "The category of this DeviceMetric is unspecified.",
    },
  ],
};
