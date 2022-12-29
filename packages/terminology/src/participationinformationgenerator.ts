/**
 * Parties that may or should contribute or have contributed information to the Act. Such information includes information leading to the decision to perform the Act and how to perform the Act (e.g., consultant), information that the Act itself seeks to reveal (e.g., informant of clinical history), or information about what Act was performed (e.g., informant witness).
 * http://terminology.hl7.org/ValueSet/v3-ParticipationInformationGenerator
 */
export const ParticipationInformationGeneratorCode = {
  /**
   * author (originator)
   */
  authororiginator: "AUT",

  /**
   * informant
   */
  informant: "INF",

  /**
   * Transcriber
   */
  Transcriber: "TRANS",

  /**
   * data entry person
   */
  dataentryperson: "ENT",

  /**
   * witness
   */
  witness: "WIT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationInformationGeneratorCode =
  typeof ParticipationInformationGeneratorCode[keyof typeof ParticipationInformationGeneratorCode];
