/**
 * This code is used to specify the exact function an actor is authorized to have in authoring a consent override.
 * http://terminology.hl7.org/ValueSet/v3-OverriderParticipationFunction
 */
export const OverriderParticipationFunctionCode = {
  /**
   * OverriderParticipationFunction
   */
  _OverriderParticipationFunction: "_OverriderParticipationFunction",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OverriderParticipationFunctionCode =
  typeof OverriderParticipationFunctionCode[keyof typeof OverriderParticipationFunctionCode];
