/**
 * **Definition:** Set of codes indicating the manner in which payors participate in a policy or program.</
 * http://terminology.hl7.org/ValueSet/v3-PayorParticipationFunction
 */
export const PayorParticipationFunctionCode = {
  /**
   * PayorParticipationFunction
   */
  _PayorParticipationFunction: "_PayorParticipationFunction",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PayorParticipationFunctionCode =
  typeof PayorParticipationFunctionCode[keyof typeof PayorParticipationFunctionCode];
