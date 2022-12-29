/**
 * Criterion for rejection of the specimen by laboratory.
 * http://terminology.hl7.org/ValueSet/rejection-criteria
 */
export const RejectionCriterionCode = {
  /**
   * hemolized specimen
   */
  hemolizedspecimen: "hemolized",

  /**
   * insufficient specimen volume
   */
  insufficientspecimenvolume: "insufficient",

  /**
   * broken specimen container
   */
  brokenspecimencontainer: "broken",

  /**
   * specimen clotted
   */
  specimenclotted: "clotted",

  /**
   * specimen temperature inappropriate
   */
  specimentemperatureinappropriate: "wrong-temperature",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RejectionCriterionCode =
  typeof RejectionCriterionCode[keyof typeof RejectionCriterionCode];
