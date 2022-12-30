/**
 * List of condition observations.
 * http://terminology.hl7.org/ValueSet/v3-ActConditionList
 */
export const ActConditionListCode = {
  /**
   * condition list
   */
  CONDLIST: "CONDLIST",

  /**
   * intolerance list
   */
  INTOLIST: "INTOLIST",

  /**
   * problem list
   */
  PROBLIST: "PROBLIST",

  /**
   * risk factors
   */
  RISKLIST: "RISKLIST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActConditionListCode =
  typeof ActConditionListCode[keyof typeof ActConditionListCode];
