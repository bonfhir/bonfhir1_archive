/**
 * Codes specifying living expense indicators used to assess or establish eligibility for coverage under a policy or program.
 * http://terminology.hl7.org/ValueSet/v3-ObservationLivingExpenseValue
 */
export const ObservationLivingExpenseValueCode = {
  /**
   * living expense
   */
  LIVEXP: "LIVEXP",

  /**
   * clothing expense
   */
  CLOTH: "CLOTH",

  /**
   * food expense
   */
  FOOD: "FOOD",

  /**
   * health expense
   */
  HEALTH: "HEALTH",

  /**
   * household expense
   */
  HOUSE: "HOUSE",

  /**
   * legal expense
   */
  LEGAL: "LEGAL",

  /**
   * mortgage
   */
  MORTG: "MORTG",

  /**
   * rent
   */
  RENT: "RENT",

  /**
   * sundry expense
   */
  SUNDRY: "SUNDRY",

  /**
   * transportation expense
   */
  TRANS: "TRANS",

  /**
   * utility expense
   */
  UTIL: "UTIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationLivingExpenseValueCode =
  typeof ObservationLivingExpenseValueCode[keyof typeof ObservationLivingExpenseValueCode];
