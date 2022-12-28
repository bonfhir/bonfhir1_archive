/**
 * This code is used to specify the exact function an actor is authorized to have in a service in all necessary detail.
 * http://terminology.hl7.org/ValueSet/v3-AuthorizedParticipationFunction
 */
export const AuthorizedParticipationFunctionCode = {
  /**
   * AuthorizedParticipationFunction
   */
  _AuthorizedParticipationFunction: "_AuthorizedParticipationFunction",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuthorizedParticipationFunctionCode =
  typeof AuthorizedParticipationFunctionCode[keyof typeof AuthorizedParticipationFunctionCode];
