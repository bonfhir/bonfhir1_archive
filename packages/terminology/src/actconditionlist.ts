/**
 * List of condition observations.
 * http://terminology.hl7.org/ValueSet/v3-ActConditionList
 */
export const ActConditionListCode = {
  /**
   * condition list
   */
  conditionlist: "CONDLIST",

  /**
   * intolerance list
   */
  intolerancelist: "INTOLIST",

  /**
   * problem list
   */
  problemlist: "PROBLIST",

  /**
   * risk factors
   */
  riskfactors: "RISKLIST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActConditionListCode =
  typeof ActConditionListCode[keyof typeof ActConditionListCode];
