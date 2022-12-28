/**
 * The relationship between two substance types.
 * http://hl7.org/fhir/ValueSet/substance-amount-type
 */
export const SubstanceAmountTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceAmountTypeCode =
  typeof SubstanceAmountTypeCode[keyof typeof SubstanceAmountTypeCode];
