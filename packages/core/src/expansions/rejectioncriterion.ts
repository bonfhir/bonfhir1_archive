/**
 * Criterion for rejection of the specimen by laboratory.
 * http://terminology.hl7.org/ValueSet/rejection-criteria
 */
export const RejectionCriterionCode = {
  /**
   * hemolized specimen
   */
  hemolized: "hemolized",

  /**
   * insufficient specimen volume
   */
  insufficient: "insufficient",

  /**
   * broken specimen container
   */
  broken: "broken",

  /**
   * specimen clotted
   */
  clotted: "clotted",

  /**
   * specimen temperature inappropriate
   */
  "wrong-temperature": "wrong-temperature",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RejectionCriterionCode =
  typeof RejectionCriterionCode[keyof typeof RejectionCriterionCode];
