/**
 * Value Set of codes that specify whether the order is to be executed in an inpatient setting or an outpatient setting.
 * http://terminology.hl7.org/ValueSet/v2-0482
 */
export const Hl7VSOrderTypeCode = {
  /**
   * Inpatient Order
   */
  I: "I",

  /**
   * Outpatient Order
   */
  O: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrderTypeCode =
  typeof Hl7VSOrderTypeCode[keyof typeof Hl7VSOrderTypeCode];
