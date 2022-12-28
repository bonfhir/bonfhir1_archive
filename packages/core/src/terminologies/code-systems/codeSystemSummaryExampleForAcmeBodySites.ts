/**
 * This is an example code system summary for the ACME codes for body site.
 * http://hl7.org/fhir/CodeSystem/summary
 */
export const CodesystemsummaryexampleforACMEbodysitesCodeSystem = {
  resourceType: "CodeSystem",
  id: "summary",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/CodeSystem/summary defines many codes, but they are not represented here</p></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "http://hl7.org/fhir/CodeSystem/summary",
  version: "4.3.0",
  name: "Code system summary example for ACME body sites",
  status: "draft",
  experimental: true,
  publisher: "HL7 International",
  contact: [
    {
      name: "FHIR project team",
      telecom: [{ system: "url", value: "http://hl7.org/fhir" }],
    },
  ],
  description:
    "This is an example code system summary for the ACME codes for body site.",
  useContext: [
    {
      code: {
        system: "http://example.org/CodeSystem/contexttype",
        code: "species",
      },
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "337915000",
            display: "Homo sapiens (organism)",
          },
        ],
      },
    },
  ],
  jurisdiction: [{ coding: [{ system: "urn:iso:std:iso:3166", code: "CA" }] }],
  caseSensitive: true,
  content: "not-present",
  count: 92,
};
