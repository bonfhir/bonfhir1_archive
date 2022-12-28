/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 * http://hl7.org/fhir/detectedissue-severity
 */
export const DetectedIssueSeverityCodeSystem = {
  resourceType: "CodeSystem",
  id: "detectedissue-severity",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>DetectedIssueSeverity</h2>\n      \n      <div>\n        \n        <p>Indicates the potential degree of impact of the identified issue on the patient.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/detectedissue-severity defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">high\n            \n            <a name="detectedissue-severity-high"> </a>\n          \n          </td>\n          \n          <td>High</td>\n          \n          <td>Indicates the issue may be life-threatening or has the potential to cause permanent injury.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">moderate\n            \n            <a name="detectedissue-severity-moderate"> </a>\n          \n          </td>\n          \n          <td>Moderate</td>\n          \n          <td>Indicates the issue may result in noticeable adverse consequences but is unlikely to be life-threatening or cause permanent injury.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">low\n            \n            <a name="detectedissue-severity-low"> </a>\n          \n          </td>\n          \n          <td>Low</td>\n          \n          <td>Indicates the issue may result in some adverse consequences but is unlikely to substantially affect the situation of the subject.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
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
  url: "http://hl7.org/fhir/detectedissue-severity",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.207",
    },
  ],
  version: "4.3.0",
  name: "DetectedIssueSeverity",
  title: "DetectedIssueSeverity",
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
    "Indicates the potential degree of impact of the identified issue on the patient.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/detectedissue-severity",
  content: "complete",
  concept: [
    {
      code: "high",
      display: "High",
      definition:
        "Indicates the issue may be life-threatening or has the potential to cause permanent injury.",
    },
    {
      code: "moderate",
      display: "Moderate",
      definition:
        "Indicates the issue may result in noticeable adverse consequences but is unlikely to be life-threatening or cause permanent injury.",
    },
    {
      code: "low",
      display: "Low",
      definition:
        "Indicates the issue may result in some adverse consequences but is unlikely to substantially affect the situation of the subject.",
    },
  ],
};
