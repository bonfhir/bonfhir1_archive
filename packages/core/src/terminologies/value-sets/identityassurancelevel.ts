/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 * http://hl7.org/fhir/ValueSet/identity-assuranceLevel
 */
export const IdentityAssuranceLevelCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IdentityAssuranceLevelCode =
  typeof IdentityAssuranceLevelCode[keyof typeof IdentityAssuranceLevelCode];
