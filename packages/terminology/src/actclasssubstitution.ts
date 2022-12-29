/**
 * Definition: Indicates that the subject Act has undergone or should undergo substitution of a type indicated by Act.code.

Rationale: Used to specify "allowed" substitution when creating orders, "actual" susbstitution when sending events, as well as the reason for the substitution and who was responsible for it.
 * http://terminology.hl7.org/ValueSet/v3-ActClassSubstitution
 */
export const ActClassSubstitutionCode = {
  /**
   * Substitution
   */
  Substitution: "SUBST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassSubstitutionCode =
  typeof ActClassSubstitutionCode[keyof typeof ActClassSubstitutionCode];
