/**
 * Restricts participation to either physical or verbal
 * http://terminology.hl7.org/ValueSet/v3-xPhysicalVerbalParticipationMode
 */
export const XPhysicalVerbalParticipationModeCode = {
  /**
   * physical presence
   */
  physicalpresence: "PHYSICAL",

  /**
   * verbal
   */
  verbal: "VERBAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XPhysicalVerbalParticipationModeCode =
  typeof XPhysicalVerbalParticipationModeCode[keyof typeof XPhysicalVerbalParticipationModeCode];
