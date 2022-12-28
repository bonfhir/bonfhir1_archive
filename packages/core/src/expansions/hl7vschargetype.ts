/**
 * Value Set of codes that specify someone or something other than the patient to be billed for a service.
 * http://terminology.hl7.org/ValueSet/v2-0122
 */
export const Hl7VSChargeTypeCode = {
  /**
   * Charge
   */
  CH: "CH",

  /**
   * Contract
   */
  CO: "CO",

  /**
   * Credit
   */
  CR: "CR",

  /**
   * Department
   */
  DP: "DP",

  /**
   * Grant
   */
  GR: "GR",

  /**
   * No Charge
   */
  NC: "NC",

  /**
   * Professional
   */
  PC: "PC",

  /**
   * Research
   */
  RS: "RS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSChargeTypeCode =
  typeof Hl7VSChargeTypeCode[keyof typeof Hl7VSChargeTypeCode];
