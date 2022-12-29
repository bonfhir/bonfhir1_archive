/**
 * Clones using this x\_domain should have a name "encounterParticipant".
 * http://terminology.hl7.org/ValueSet/v3-xEncounterParticipant
 */
export const XEncounterParticipantCode = {
  /**
   * admitter
   */
  admitter: "ADM",

  /**
   * attender
   */
  attender: "ATND",

  /**
   * consultant
   */
  consultant: "CON",

  /**
   * discharger
   */
  discharger: "DIS",

  /**
   * referrer
   */
  referrer: "REF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XEncounterParticipantCode =
  typeof XEncounterParticipantCode[keyof typeof XEncounterParticipantCode];
