/**
 * **Definition:** Codes representing the maximum coverate or financial participation requirements.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageMaximaCodes
 */
export const ActCoverageMaximaCodesCode = {
  /**
   * coverage maximum
   */
  COVMX: "COVMX",

  /**
   * life time maximum
   */
  LFEMX: "LFEMX",

  /**
   * period maximum
   */
  PRDMX: "PRDMX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageMaximaCodesCode =
  typeof ActCoverageMaximaCodesCode[keyof typeof ActCoverageMaximaCodesCode];
