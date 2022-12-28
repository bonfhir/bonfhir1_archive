/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActObservationList
 */
export const ActObservationListCode = {
  /**
   * care plan
   */
  CARELIST: "CARELIST",

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

  /**
   * goal list
   */
  GOALLIST: "GOALLIST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActObservationListCode =
  typeof ActObservationListCode[keyof typeof ActObservationListCode];
