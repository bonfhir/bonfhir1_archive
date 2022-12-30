/**
 * Value Set of codes that specify the status of the information provided in a device sterilization or decontamination cycle.
 * http://terminology.hl7.org/ValueSet/v2-0669
 */
export const Hl7VSLoadStatusCode = {
  /**
   * Building a Load
   */
  LLD: "LLD",

  /**
   * Load In Process
   */
  LCP: "LCP",

  /**
   * Load is Complete
   */
  LCC: "LCC",

  /**
   * Load Canceled
   */
  LCN: "LCN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLoadStatusCode =
  typeof Hl7VSLoadStatusCode[keyof typeof Hl7VSLoadStatusCode];
