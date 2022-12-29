/**
 * Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)
 * http://terminology.hl7.org/ValueSet/flag-category
 */
export const FlagCategoryCode = {
  /**
   * Diet
   */
  Diet: "diet",

  /**
   * Drug
   */
  Drug: "drug",

  /**
   * Lab
   */
  Lab: "lab",

  /**
   * Administrative
   */
  Administrative: "admin",

  /**
   * Subject Contact
   */
  SubjectContact: "contact",

  /**
   * Clinical
   */
  Clinical: "clinical",

  /**
   * Behavioral
   */
  Behavioral: "behavioral",

  /**
   * Research
   */
  Research: "research",

  /**
   * Advance Directive
   */
  AdvanceDirective: "advance-directive",

  /**
   * Safety
   */
  Safety: "safety",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FlagCategoryCode =
  typeof FlagCategoryCode[keyof typeof FlagCategoryCode];
