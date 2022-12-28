/**
 * This value set includes Status codes.
 * http://hl7.org/fhir/ValueSet/fm-status
 */
export const FinancialResourceStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FinancialResourceStatusCodesCode =
  typeof FinancialResourceStatusCodesCode[keyof typeof FinancialResourceStatusCodesCode];
