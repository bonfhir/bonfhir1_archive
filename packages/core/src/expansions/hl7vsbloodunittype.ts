/**
 * Value Set of codes used to specify the type of blood unit
 * http://terminology.hl7.org/ValueSet/v2-0566
 */
export const Hl7VSBloodUnitTypeCode = {
  /**
   * Whole Blood
   */
  WBL: "WBL",

  /**
   * Red Blood Cells
   */
  RBC: "RBC",

  /**
   * Plasma
   */
  PLS: "PLS",

  /**
   * Platelets
   */
  PLT: "PLT",

  /**
   * Granulocytes
   */
  GRN: "GRN",

  /**
   * Peripheral Stem Cells
   */
  PSC: "PSC",

  /**
   * Lymphocytes
   */
  LYM: "LYM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBloodUnitTypeCode =
  typeof Hl7VSBloodUnitTypeCode[keyof typeof Hl7VSBloodUnitTypeCode];
