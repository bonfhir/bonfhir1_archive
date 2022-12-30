/**
 * This code is used to specify the exact function an actor is authorized to have in authoring a consent directive.
 * http://terminology.hl7.org/ValueSet/v3-ConsenterParticipationFunction
 */
export const ConsenterParticipationFunctionCode = {
  /**
   * ConsenterParticipationFunction
   */
  _ConsenterParticipationFunction: "_ConsenterParticipationFunction",

  /**
   * legal guardian consent author
   */
  GRDCON: "GRDCON",

  /**
   * healthcare power of attorney consent author
   */
  POACON: "POACON",

  /**
   * personal representative consent author
   */
  PRCON: "PRCON",

  /**
   * authorized provider masking author
   */
  PROMSK: "PROMSK",

  /**
   * subject of consent author
   */
  SUBCON: "SUBCON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsenterParticipationFunctionCode =
  typeof ConsenterParticipationFunctionCode[keyof typeof ConsenterParticipationFunctionCode];
