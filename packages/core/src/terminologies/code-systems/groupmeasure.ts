export const GroupMeasure = {
  resourceType: "CodeSystem",
  id: "group-measure",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>GroupMeasure</h2>\n      \n      <div>\n        \n        <p>Possible group measure aggregates (E.g. Mean, Median).</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/group-measure defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">mean\n            \n            <a name="group-measure-mean"> </a>\n          \n          </td>\n          \n          <td>Mean</td>\n          \n          <td>Aggregated using Mean of participant values.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">median\n            \n            <a name="group-measure-median"> </a>\n          \n          </td>\n          \n          <td>Median</td>\n          \n          <td>Aggregated using Median of participant values.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">mean-of-mean\n            \n            <a name="group-measure-mean-of-mean"> </a>\n          \n          </td>\n          \n          <td>Mean of Study Means</td>\n          \n          <td>Aggregated using Mean of study mean values.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">mean-of-median\n            \n            <a name="group-measure-mean-of-median"> </a>\n          \n          </td>\n          \n          <td>Mean of Study Medins</td>\n          \n          <td>Aggregated using Mean of study median values.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">median-of-mean\n            \n            <a name="group-measure-median-of-mean"> </a>\n          \n          </td>\n          \n          <td>Median of Study Means</td>\n          \n          <td>Aggregated using Median of study mean values.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">median-of-median\n            \n            <a name="group-measure-median-of-median"> </a>\n          \n          </td>\n          \n          <td>Median of Study Medians</td>\n          \n          <td>Aggregated using Median of study median values.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
      valueInteger: 0,
    },
  ],
  url: "http://hl7.org/fhir/group-measure",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1346",
    },
  ],
  version: "4.3.0",
  name: "GroupMeasure",
  title: "GroupMeasure",
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
  description: "Possible group measure aggregates (E.g. Mean, Median).",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/group-measure",
  content: "complete",
  concept: [
    {
      code: "mean",
      display: "Mean",
      definition: "Aggregated using Mean of participant values.",
    },
    {
      code: "median",
      display: "Median",
      definition: "Aggregated using Median of participant values.",
    },
    {
      code: "mean-of-mean",
      display: "Mean of Study Means",
      definition: "Aggregated using Mean of study mean values.",
    },
    {
      code: "mean-of-median",
      display: "Mean of Study Medins",
      definition: "Aggregated using Mean of study median values.",
    },
    {
      code: "median-of-mean",
      display: "Median of Study Means",
      definition: "Aggregated using Median of study mean values.",
    },
    {
      code: "median-of-median",
      display: "Median of Study Medians",
      definition: "Aggregated using Median of study median values.",
    },
  ],
};
