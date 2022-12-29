/**
 * This code is used to specify the exact function an actor is authorized to have in authoring a consent override.
 * http://terminology.hl7.org/ValueSet/v3-OverriderParticipationFunction
 */
export const OverriderParticipationFunctionCode = {
  /**
   * OverriderParticipationFunction
   */
  OverriderParticipationFunction: "_OverriderParticipationFunction",

  /**
   * consent overrider
   */
  consentoverrider: "AUCOV",

  /**
   * emergency overrider
   */
  emergencyoverrider: "AUEMROV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OverriderParticipationFunctionCode =
  typeof OverriderParticipationFunctionCode[keyof typeof OverriderParticipationFunctionCode];
