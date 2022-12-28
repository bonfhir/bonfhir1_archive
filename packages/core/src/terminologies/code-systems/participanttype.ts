/**
 * This codesystem defines a set of codes that can be used to indicate how an individual participates in an encounter.
 * http://terminology.hl7.org/CodeSystem/participant-type
 */
export const ParticipantTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "encounter-participant-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/participant-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">translator<a name="encounter-participant-type-translator"> </a></td><td>Translator</td><td>A translator who is facilitating communication with the patient during the encounter.</td></tr><tr><td style="white-space:nowrap">emergency<a name="encounter-participant-type-emergency"> </a></td><td>Emergency</td><td>A person to be contacted in case of an emergency during the encounter.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/participant-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1089",
    },
  ],
  version: "4.3.0",
  name: "ParticipantType",
  status: "draft",
  experimental: false,
  description:
    "This codesystem defines a set of codes that can be used to indicate how an individual participates in an encounter.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "translator",
      display: "Translator",
      definition:
        "A translator who is facilitating communication with the patient during the encounter.",
    },
    {
      code: "emergency",
      display: "Emergency",
      definition:
        "A person to be contacted in case of an emergency during the encounter.",
    },
  ],
};
