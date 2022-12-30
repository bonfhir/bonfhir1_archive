/**
 * Value Set of codes that specify the current status of the specified blood product as indicated by the filler or placer.  For example, the first status change of a product that may trigger a Blood Product Dispense Status Message occurs when it fir
 * http://terminology.hl7.org/ValueSet/v2-0510
 */
export const Hl7VSBloodProductDispenseStatusCode = {
  /**
   * Received into inventory (for specified patient)
   */
  RI: "RI",

  /**
   * Reserved and ready to dispense
   */
  RD: "RD",

  /**
   * Reserved (ordered and product allocated for the patient)
   */
  RS: "RS",

  /**
   * Released (no longer allocated for the patient)
   */
  RE: "RE",

  /**
   * Dispensed to patient location
   */
  DS: "DS",

  /**
   * Returned unused/no longer needed
   */
  RA: "RA",

  /**
   * Returned unused/keep linked to patient for possible use later
   */
  RL: "RL",

  /**
   * Wasted (product no longer viable)
   */
  WA: "WA",

  /**
   * Presumed transfused (dispensed and not returned)
   */
  PT: "PT",

  /**
   * Released into inventory for general availability
   */
  CR: "CR",

  /**
   * Request to dispense blood product
   */
  RQ: "RQ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBloodProductDispenseStatusCode =
  typeof Hl7VSBloodProductDispenseStatusCode[keyof typeof Hl7VSBloodProductDispenseStatusCode];
