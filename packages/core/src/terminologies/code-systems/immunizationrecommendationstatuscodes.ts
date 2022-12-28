export const ImmunizationRecommendationStatusCodes = {
  resourceType: "CodeSystem",
  id: "immunization-recommendation-status",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/immunization-recommendation-status defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">due<a name="immunization-recommendation-status-due"> </a></td><td>Due</td><td>The patient is due for their next vaccination.</td></tr><tr><td style="white-space:nowrap">overdue<a name="immunization-recommendation-status-overdue"> </a></td><td>Overdue</td><td>The patient is considered overdue for their next vaccination.</td></tr><tr><td style="white-space:nowrap">immune<a name="immunization-recommendation-status-immune"> </a></td><td>Immune</td><td>The patient is immune to the target disease and further immunization against the disease is not likely to provide benefit.</td></tr><tr><td style="white-space:nowrap">contraindicated<a name="immunization-recommendation-status-contraindicated"> </a></td><td>Contraindicated</td><td>The patient is contraindicated for futher doses.</td></tr><tr><td style="white-space:nowrap">complete<a name="immunization-recommendation-status-complete"> </a></td><td>Complete</td><td>The patient is fully protected and no further doses are recommended.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pher",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/immunization-recommendation-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1104",
    },
  ],
  version: "4.3.0",
  name: "ImmunizationRecommendationStatusCodes",
  title: "Immunization Recommendation Status Codes",
  status: "draft",
  experimental: false,
  description:
    "The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the status of the patient relative to a recommended dose. This value set is provided as a suggestive example.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "due",
      display: "Due",
      definition: "The patient is due for their next vaccination.",
    },
    {
      code: "overdue",
      display: "Overdue",
      definition:
        "The patient is considered overdue for their next vaccination.",
    },
    {
      code: "immune",
      display: "Immune",
      definition:
        "The patient is immune to the target disease and further immunization against the disease is not likely to provide benefit.",
    },
    {
      code: "contraindicated",
      display: "Contraindicated",
      definition: "The patient is contraindicated for futher doses.",
    },
    {
      code: "complete",
      display: "Complete",
      definition:
        "The patient is fully protected and no further doses are recommended.",
    },
  ],
};
