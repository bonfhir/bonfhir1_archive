/**
 * Example list of detail codes for flagged issues.  (Not complete or necessarily appropriate.)
 * http://hl7.org/fhir/ValueSet/flag-code
 */
export const FlagCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FlagCodeCode = typeof FlagCodeCode[keyof typeof FlagCodeCode];
