/**
 * **Description:** Coded reasons why an antigen is considered invalid.
 * http://terminology.hl7.org/ValueSet/v3-ActAntigenInvalidReason
 */
export const ActAntigenInvalidReasonCode = {
  /**
   * adverse storage condition
   */
  ADVSTORAGE: "ADVSTORAGE",

  /**
   * cold chain break
   */
  COLDCHNBRK: "COLDCHNBRK",

  /**
   * expired lot
   */
  EXPLOT: "EXPLOT",

  /**
   * administered outside recommended schedule or practice
   */
  OUTSIDESCHED: "OUTSIDESCHED",

  /**
   * product recall
   */
  PRODRECALL: "PRODRECALL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAntigenInvalidReasonCode =
  typeof ActAntigenInvalidReasonCode[keyof typeof ActAntigenInvalidReasonCode];
