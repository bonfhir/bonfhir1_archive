/**
 * This value set includes sample Coverage Copayment Type codes.
 * http://hl7.org/fhir/ValueSet/coverage-copay-type
 */
export const CoverageCopayTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageCopayTypeCodesCode =
  typeof CoverageCopayTypeCodesCode[keyof typeof CoverageCopayTypeCodesCode];
