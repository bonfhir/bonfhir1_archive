/**
 * Value Set of codes used to specify the type of blood unit
 * http://terminology.hl7.org/ValueSet/v2-0566
 */
export const Hl7VSBloodUnitTypeCode = {
  /**
   * Whole Blood
   */
  WholeBlood: "WBL",

  /**
   * Red Blood Cells
   */
  RedBloodCells: "RBC",

  /**
   * Plasma
   */
  Plasma: "PLS",

  /**
   * Platelets
   */
  Platelets: "PLT",

  /**
   * Granulocytes
   */
  Granulocytes: "GRN",

  /**
   * Peripheral Stem Cells
   */
  PeripheralStemCells: "PSC",

  /**
   * Lymphocytes
   */
  Lymphocytes: "LYM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBloodUnitTypeCode =
  typeof Hl7VSBloodUnitTypeCode[keyof typeof Hl7VSBloodUnitTypeCode];
