/**
 * The kind of dose or rate specified.
 * http://terminology.hl7.org/CodeSystem/dose-rate-type
 */
export const DoseAndRateTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "dose-rate-type",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/dose-rate-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">calculated<a name="dose-rate-type-calculated"> </a></td><td>Calculated</td><td>The dose specified is calculated by the prescriber or the system.</td></tr><tr><td style="white-space:nowrap">ordered<a name="dose-rate-type-ordered"> </a></td><td>Ordered</td><td>The dose specified is as ordered by the prescriber.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/dose-rate-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1069",
    },
  ],
  version: "4.3.0",
  name: "DoseAndRateType",
  title: "DoseAndRateType",
  status: "draft",
  experimental: true,
  date: "2022-05-28T12:47:40+10:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "The kind of dose or rate specified.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/dose-rate-type",
  content: "complete",
  concept: [
    {
      code: "calculated",
      display: "Calculated",
      definition:
        "The dose specified is calculated by the prescriber or the system.",
    },
    {
      code: "ordered",
      display: "Ordered",
      definition: "The dose specified is as ordered by the prescriber.",
    },
  ],
};
