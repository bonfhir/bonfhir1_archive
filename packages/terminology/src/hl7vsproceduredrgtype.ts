/**
 * Value Set of codes that specify a procedure's priority ranking relative to its DRG.
 * http://terminology.hl7.org/ValueSet/v2-0416
 */
export const Hl7VSProcedureDrgTypeCode = {
  /**
   * 1st non-Operative
   */
  OnestnonOperative: "1",

  /**
   * 2nd non-Operative
   */
  TwondnonOperative: "2",

  /**
   * Major Operative
   */
  MajorOperative: "3",

  /**
   * 2nd Operative
   */
  TwondOperative: "4",

  /**
   * 3rd Operative
   */
  ThreerdOperative: "5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcedureDrgTypeCode =
  typeof Hl7VSProcedureDrgTypeCode[keyof typeof Hl7VSProcedureDrgTypeCode];
