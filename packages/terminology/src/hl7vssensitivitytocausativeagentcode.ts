/**
 * Value Set of codes specifying the reason the patient should not be exposed to a substance.
 * http://terminology.hl7.org/ValueSet/v2-0436
 */
export const Hl7VSSensitivityToCausativeAgentCodeCode = {
  /**
   * Adverse Reaction (Not otherwise classified)
   */
  AD: "AD",

  /**
   * Allergy
   */
  AL: "AL",

  /**
   * Contraindication
   */
  CT: "CT",

  /**
   * Intolerance
   */
  IN: "IN",

  /**
   * Side Effect
   */
  SE: "SE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSensitivityToCausativeAgentCodeCode =
  typeof Hl7VSSensitivityToCausativeAgentCodeCode[keyof typeof Hl7VSSensitivityToCausativeAgentCodeCode];
