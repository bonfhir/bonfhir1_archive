/**
 * Value Set of codes that specify a procedure's priority ranking relative to its DRG.
 * http://terminology.hl7.org/ValueSet/v2-0416
 */
export const Hl7VSProcedureDrgTypeCode = {
  /**
   * 1st non-Operative
   */
  "1": "1",

  /**
   * 2nd non-Operative
   */
  "2": "2",

  /**
   * Major Operative
   */
  "3": "3",

  /**
   * 2nd Operative
   */
  "4": "4",

  /**
   * 3rd Operative
   */
  "5": "5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcedureDrgTypeCode =
  typeof Hl7VSProcedureDrgTypeCode[keyof typeof Hl7VSProcedureDrgTypeCode];
