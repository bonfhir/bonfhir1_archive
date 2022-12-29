/**
 * This code is used to specify the exact function an actor is authorized to have in authoring a consent directive.
 * http://terminology.hl7.org/ValueSet/v3-ConsenterParticipationFunction
 */
export const ConsenterParticipationFunctionCode = {
  /**
   * ConsenterParticipationFunction
   */
  ConsenterParticipationFunction: "_ConsenterParticipationFunction",

  /**
   * legal guardian consent author
   */
  legalguardianconsentauthor: "GRDCON",

  /**
   * healthcare power of attorney consent author
   */
  healthcarepowerofattorneyconsentauthor: "POACON",

  /**
   * personal representative consent author
   */
  personalrepresentativeconsentauthor: "PRCON",

  /**
   * authorized provider masking author
   */
  authorizedprovidermaskingauthor: "PROMSK",

  /**
   * subject of consent author
   */
  subjectofconsentauthor: "SUBCON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsenterParticipationFunctionCode =
  typeof ConsenterParticipationFunctionCode[keyof typeof ConsenterParticipationFunctionCode];
