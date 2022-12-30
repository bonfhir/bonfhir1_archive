/**
 * Substitution occurred or is permitted with another product in the same generic ingredient.
 * http://terminology.hl7.org/ValueSet/v3-SubstanceAdminGenericSubstitution
 */
export const SubstanceAdminGenericSubstitutionCode = {
  /**
   * generic composition
   */
  G: "G",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceAdminGenericSubstitutionCode =
  typeof SubstanceAdminGenericSubstitutionCode[keyof typeof SubstanceAdminGenericSubstitutionCode];
