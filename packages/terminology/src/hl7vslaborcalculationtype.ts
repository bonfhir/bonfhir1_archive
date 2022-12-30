/**
 * Value Set of codes that specify the method used to calculate employee labor and measure employee productivity.
 * http://terminology.hl7.org/ValueSet/v2-0651
 */
export const Hl7VSLaborCalculationTypeCode = {
  /**
   * Time
   */
  TME: "TME",

  /**
   * Cost
   */
  CST: "CST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLaborCalculationTypeCode =
  typeof Hl7VSLaborCalculationTypeCode[keyof typeof Hl7VSLaborCalculationTypeCode];
