/**
 * This code is used to specify the exact function an actor is authorized to have in a service in all necessary detail.
 * http://terminology.hl7.org/ValueSet/v3-AuthorizedParticipationFunction
 */
export const AuthorizedParticipationFunctionCode = {
  /**
   * AuthorizedParticipationFunction
   */
  _AuthorizedParticipationFunction: "_AuthorizedParticipationFunction",

  /**
   * AuthorizedReceiverParticipationFunction
   */
  _AuthorizedReceiverParticipationFunction:
    "_AuthorizedReceiverParticipationFunction",

  /**
   * caregiver information receiver
   */
  AUCG: "AUCG",

  /**
   * legitimate relationship information receiver
   */
  AULR: "AULR",

  /**
   * care team information receiver
   */
  AUTM: "AUTM",

  /**
   * work area information receiver
   */
  AUWA: "AUWA",

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

  /**
   * OverriderParticipationFunction
   */
  _OverriderParticipationFunction: "_OverriderParticipationFunction",

  /**
   * consent overrider
   */
  AUCOV: "AUCOV",

  /**
   * emergency overrider
   */
  AUEMROV: "AUEMROV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuthorizedParticipationFunctionCode =
  typeof AuthorizedParticipationFunctionCode[keyof typeof AuthorizedParticipationFunctionCode];
