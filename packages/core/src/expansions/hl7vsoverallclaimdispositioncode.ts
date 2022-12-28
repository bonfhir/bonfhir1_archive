/**
 * Value Set of codes specifying the final status of the claim.
 * http://terminology.hl7.org/ValueSet/v2-0457
 */
export const Hl7VSOverallClaimDispositionCodeCode = {
  /**
   * No edits present on claim
   */
  "0": "0",

  /**
   * Only edits present are for line item denial or rejection
   */
  "1": "1",

  /**
   * Multiple-day claim with one or more days denied or rejected
   */
  "2": "2",

  /**
   * Claim denied, rejected, suspended or returned to provider with only post payment edits
   */
  "3": "3",

  /**
   * Claim denied, rejected, suspended or returned to provider with only pre payment edits
   */
  "4": "4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOverallClaimDispositionCodeCode =
  typeof Hl7VSOverallClaimDispositionCodeCode[keyof typeof Hl7VSOverallClaimDispositionCodeCode];
