/**
 * Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)
 * http://terminology.hl7.org/ValueSet/flag-category
 */
export const FlagCategoryCode = {
  /**
   * Diet
   */
  diet: "diet",

  /**
   * Drug
   */
  drug: "drug",

  /**
   * Lab
   */
  lab: "lab",

  /**
   * Administrative
   */
  admin: "admin",

  /**
   * Subject Contact
   */
  contact: "contact",

  /**
   * Clinical
   */
  clinical: "clinical",

  /**
   * Behavioral
   */
  behavioral: "behavioral",

  /**
   * Research
   */
  research: "research",

  /**
   * Advance Directive
   */
  "advance-directive": "advance-directive",

  /**
   * Safety
   */
  safety: "safety",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FlagCategoryCode =
  typeof FlagCategoryCode[keyof typeof FlagCategoryCode];
