/**
 * This example codesystem defines a set of codes that can be used to indicate the type of encounter: a specific code indicating type of service provided.
 * http://terminology.hl7.org/CodeSystem/encounter-type
 */
export const EncounterTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "encounter-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/encounter-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td style="white-space:nowrap">ADMS<a name="encounter-type-ADMS"> </a></td><td>Annual diabetes mellitus screening</td></tr><tr><td style="white-space:nowrap">BD/BM-clin<a name="encounter-type-BD.47BM-clin"> </a></td><td>Bone drilling/bone marrow punction in clinic</td></tr><tr><td style="white-space:nowrap">CCS60<a name="encounter-type-CCS60"> </a></td><td>Infant colon screening - 60 minutes</td></tr><tr><td style="white-space:nowrap">OKI<a name="encounter-type-OKI"> </a></td><td>Outpatient Kenacort injection</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/encounter-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1088",
    },
  ],
  version: "4.3.0",
  name: "EncounterType",
  status: "draft",
  experimental: false,
  description:
    "This example codesystem defines a set of codes that can be used to indicate the type of encounter: a specific code indicating type of service provided.",
  caseSensitive: true,
  content: "complete",
  concept: [
    { code: "ADMS", display: "Annual diabetes mellitus screening" },
    {
      code: "BD/BM-clin",
      display: "Bone drilling/bone marrow punction in clinic",
    },
    { code: "CCS60", display: "Infant colon screening - 60 minutes" },
    { code: "OKI", display: "Outpatient Kenacort injection" },
  ],
};
