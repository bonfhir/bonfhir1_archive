/**
 * A solid dosage form in which the drug is enclosed within either a hard or soft soluble container made from a suitable form of gelatin, and which releases a drug (or drugs) in such a manner to allow a reduction in dosing frequency as compared to that drug (or drugs) presented as a conventional dosage form.
 * http://terminology.hl7.org/ValueSet/v3-ExtendedReleaseCapsule
 */
export const ExtendedReleaseCapsuleCode = {
  /**
   * Extended Release Capsule
   */
  ERCAP: "ERCAP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExtendedReleaseCapsuleCode =
  typeof ExtendedReleaseCapsuleCode[keyof typeof ExtendedReleaseCapsuleCode];
