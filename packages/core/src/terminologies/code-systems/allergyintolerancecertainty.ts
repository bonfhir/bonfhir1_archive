/**
 * Statement about the degree of clinical certainty that a specific substance was the cause    of the manifestation in a reaction event.
 * http://hl7.org/fhir/reaction-event-certainty
 */
export const AllergyIntoleranceCertaintyCodeSystem = {
  resourceType: "CodeSystem",
  id: "reaction-event-certainty",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/reaction-event-certainty defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">unlikely<a name="reaction-event-certainty-unlikely"> </a></td><td>Unlikely</td><td>There is a low level of clinical certainty that the reaction was caused by the identified      substance.</td></tr><tr><td style="white-space:nowrap">likely<a name="reaction-event-certainty-likely"> </a></td><td>Likely</td><td>There is a high level of clinical certainty that the reaction was caused by the identified      substance.</td></tr><tr><td style="white-space:nowrap">confirmed<a name="reaction-event-certainty-confirmed"> </a></td><td>Confirmed</td><td>There is a very high level of clinical certainty that the reaction was due to the identified      substance, which may include clinical evidence by testing or rechallenge.</td></tr><tr><td style="white-space:nowrap">unknown<a name="reaction-event-certainty-unknown"> </a></td><td>Unknown</td><td>The clinical certainty that the reaction was caused by the identified substance is unknown.       It is an explicit assertion that certainty is not known.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
  ],
  url: "http://hl7.org/fhir/reaction-event-certainty",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1276",
    },
  ],
  version: "4.3.0",
  name: "AllergyIntoleranceCertainty",
  title: "AllergyIntoleranceCertainty",
  status: "draft",
  experimental: false,
  date: "2019-11-01T09:29:23+11:00",
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
    "Statement about the degree of clinical certainty that a specific substance was the cause    of the manifestation in a reaction event.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/reaction-event-certainty",
  content: "complete",
  concept: [
    {
      code: "unlikely",
      display: "Unlikely",
      definition:
        "There is a low level of clinical certainty that the reaction was caused by the identified      substance.",
    },
    {
      code: "likely",
      display: "Likely",
      definition:
        "There is a high level of clinical certainty that the reaction was caused by the identified      substance.",
    },
    {
      code: "confirmed",
      display: "Confirmed",
      definition:
        "There is a very high level of clinical certainty that the reaction was due to the identified      substance, which may include clinical evidence by testing or rechallenge.",
    },
    {
      code: "unknown",
      display: "Unknown",
      definition:
        "The clinical certainty that the reaction was caused by the identified substance is unknown.       It is an explicit assertion that certainty is not known.",
    },
  ],
};
