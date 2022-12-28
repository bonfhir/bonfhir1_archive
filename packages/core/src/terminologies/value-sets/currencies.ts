/**
 * Currency codes from ISO 4217 (see https://www.iso.org/iso-4217-currency-codes.html)
 * http://hl7.org/fhir/ValueSet/currencies
 */
export const CurrenciesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CurrenciesCode = typeof CurrenciesCode[keyof typeof CurrenciesCode];
