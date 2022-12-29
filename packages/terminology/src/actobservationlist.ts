/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActObservationList
 */
export const ActObservationListCode = {
  /**
   * care plan
   */
  careplan: "CARELIST",

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

  /**
   * goal list
   */
  goallist: "GOALLIST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActObservationListCode =
  typeof ActObservationListCode[keyof typeof ActObservationListCode];
