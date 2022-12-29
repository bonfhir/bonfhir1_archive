/**
 * Identifies the reason or rational for why a person is not eligibile for benefits under an insurance policy.

Examples are client deceased & adopted client has been given a new policy identifier.
 * http://terminology.hl7.org/ValueSet/v3-ActIneligibilityReason
 */
export const ActIneligibilityReasonCode = {
  /**
   * coverage suspended
   */
  coveragesuspended: "COVSUS",

  /**
   * deceased
   */
  deceased: "DECSD",

  /**
   * registered in error
   */
  registeredinerror: "REGERR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActIneligibilityReasonCode =
  typeof ActIneligibilityReasonCode[keyof typeof ActIneligibilityReasonCode];
