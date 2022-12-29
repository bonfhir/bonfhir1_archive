/**
 * Participation by non-human-languaged based electronic signal
 * http://terminology.hl7.org/ValueSet/v3-ParticipationModeElectronicData
 */
export const ParticipationModeElectronicDataCode = {
  /**
   * electronic data
   */
  electronicdata: "ELECTRONIC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationModeElectronicDataCode =
  typeof ParticipationModeElectronicDataCode[keyof typeof ParticipationModeElectronicDataCode];
