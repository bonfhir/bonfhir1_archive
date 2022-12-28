/**
 * This value set includes Coverage Type codes.
 * http://hl7.org/fhir/ValueSet/coverage-type
 */
export const CoverageTypeAndSelfPayCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageTypeAndSelfPayCodesCode =
  typeof CoverageTypeAndSelfPayCodesCode[keyof typeof CoverageTypeAndSelfPayCodesCode];
