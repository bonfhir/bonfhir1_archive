/**
 * **Description:** Coded reasons why an antigen is considered invalid.
 * http://terminology.hl7.org/ValueSet/v3-ActAntigenInvalidReason
 */
export const ActAntigenInvalidReasonCode = {
  /**
   * adverse storage condition
   */
  adversestoragecondition: "ADVSTORAGE",

  /**
   * cold chain break
   */
  coldchainbreak: "COLDCHNBRK",

  /**
   * expired lot
   */
  expiredlot: "EXPLOT",

  /**
   * administered outside recommended schedule or practice
   */
  administeredoutsiderecommendedscheduleorpractice: "OUTSIDESCHED",

  /**
   * product recall
   */
  productrecall: "PRODRECALL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAntigenInvalidReasonCode =
  typeof ActAntigenInvalidReasonCode[keyof typeof ActAntigenInvalidReasonCode];
