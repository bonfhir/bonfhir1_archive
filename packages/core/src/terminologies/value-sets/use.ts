/**
 * The purpose of the Claim: predetermination, preauthorization, claim.
 * http://hl7.org/fhir/ValueSet/claim-use
 */
export const UseCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UseCode = typeof UseCode[keyof typeof UseCode];
