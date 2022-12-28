/**
 * This codesystem defines a set of codes that can be used to indicate the kinds of special arrangements in place for a patient's visit.
 * http://terminology.hl7.org/CodeSystem/encounter-special-arrangements
 */
export const SpecialArrangementsCodeSystem = {
  resourceType: "CodeSystem",
  id: "encounter-special-arrangements",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/encounter-special-arrangements defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">wheel<a name="encounter-special-arrangements-wheel"> </a></td><td>Wheelchair</td><td>The patient requires a wheelchair to be made available for the encounter.</td></tr><tr><td style="white-space:nowrap">add-bed<a name="encounter-special-arrangements-add-bed"> </a></td><td>Additional bedding</td><td>An additional bed made available for a person accompanying the patient, for example a parent accompanying a child.</td></tr><tr><td style="white-space:nowrap">int<a name="encounter-special-arrangements-int"> </a></td><td>Interpreter</td><td>The patient is not fluent in the local language and requires an interpreter to be available. Refer to the Patient.Language property for the type of interpreter required.</td></tr><tr><td style="white-space:nowrap">att<a name="encounter-special-arrangements-att"> </a></td><td>Attendant</td><td>A person who accompanies a patient to provide assistive services necessary for the patient\'s care during the encounter.</td></tr><tr><td style="white-space:nowrap">dog<a name="encounter-special-arrangements-dog"> </a></td><td>Guide dog</td><td>The patient has a guide dog and the location used for the encounter should be able to support the presence of the service animal.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1090",
    },
  ],
  version: "4.3.0",
  name: "SpecialArrangements",
  status: "draft",
  experimental: false,
  description:
    "This codesystem defines a set of codes that can be used to indicate the kinds of special arrangements in place for a patient's visit.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "wheel",
      display: "Wheelchair",
      definition:
        "The patient requires a wheelchair to be made available for the encounter.",
    },
    {
      code: "add-bed",
      display: "Additional bedding",
      definition:
        "An additional bed made available for a person accompanying the patient, for example a parent accompanying a child.",
    },
    {
      code: "int",
      display: "Interpreter",
      definition:
        "The patient is not fluent in the local language and requires an interpreter to be available. Refer to the Patient.Language property for the type of interpreter required.",
    },
    {
      code: "att",
      display: "Attendant",
      definition:
        "A person who accompanies a patient to provide assistive services necessary for the patient's care during the encounter.",
    },
    {
      code: "dog",
      display: "Guide dog",
      definition:
        "The patient has a guide dog and the location used for the encounter should be able to support the presence of the service animal.",
    },
  ],
};
