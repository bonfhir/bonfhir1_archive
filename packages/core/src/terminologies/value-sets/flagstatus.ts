/**
 * Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.
 * http://hl7.org/fhir/ValueSet/flag-status
 */
export const FlagStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FlagStatusCode = typeof FlagStatusCode[keyof typeof FlagStatusCode];
