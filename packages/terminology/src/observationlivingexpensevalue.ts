/**
 * Codes specifying living expense indicators used to assess or establish eligibility for coverage under a policy or program.
 * http://terminology.hl7.org/ValueSet/v3-ObservationLivingExpenseValue
 */
export const ObservationLivingExpenseValueCode = {
  /**
   * living expense
   */
  livingexpense: "LIVEXP",

  /**
   * clothing expense
   */
  clothingexpense: "CLOTH",

  /**
   * food expense
   */
  foodexpense: "FOOD",

  /**
   * health expense
   */
  healthexpense: "HEALTH",

  /**
   * household expense
   */
  householdexpense: "HOUSE",

  /**
   * legal expense
   */
  legalexpense: "LEGAL",

  /**
   * mortgage
   */
  mortgage: "MORTG",

  /**
   * rent
   */
  rent: "RENT",

  /**
   * sundry expense
   */
  sundryexpense: "SUNDRY",

  /**
   * transportation expense
   */
  transportationexpense: "TRANS",

  /**
   * utility expense
   */
  utilityexpense: "UTIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationLivingExpenseValueCode =
  typeof ObservationLivingExpenseValueCode[keyof typeof ObservationLivingExpenseValueCode];
