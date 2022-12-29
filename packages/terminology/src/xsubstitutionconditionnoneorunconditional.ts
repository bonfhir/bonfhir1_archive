/**
 * Restricts substitution to effectively a yes/no decision
 * http://terminology.hl7.org/ValueSet/v3-xSubstitutionConditionNoneOrUnconditional
 */
export const XSubstitutionConditionNoneOrUnconditionalCode = {
  /**
   * No substitution
   */
  Nosubstitution: "NOSUB",

  /**
   * Unconditional
   */
  Unconditional: "UNCOND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XSubstitutionConditionNoneOrUnconditionalCode =
  typeof XSubstitutionConditionNoneOrUnconditionalCode[keyof typeof XSubstitutionConditionNoneOrUnconditionalCode];
