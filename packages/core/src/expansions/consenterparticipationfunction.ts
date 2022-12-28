/**
 * This code is used to specify the exact function an actor is authorized to have in authoring a consent directive.
 * http://terminology.hl7.org/ValueSet/v3-ConsenterParticipationFunction
 */
export const ConsenterParticipationFunctionCode = {
  /**
   * ConsenterParticipationFunction
   */
  _ConsenterParticipationFunction: "_ConsenterParticipationFunction",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsenterParticipationFunctionCode =
  typeof ConsenterParticipationFunctionCode[keyof typeof ConsenterParticipationFunctionCode];
