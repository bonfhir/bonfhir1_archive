/**
 * Value Set of codes specifying the type of intended procedure.
 * http://terminology.hl7.org/ValueSet/v2-0933
 */
export const Hl7VSIntendedProcedureTypeCode = {
  /**
   * Whole Blood
   */
  WBL: "WBL",

  /**
   * Double Red Cells
   */
  "2RC": "2RC",

  /**
   * Plasma
   */
  PLS: "PLS",

  /**
   * Platelets
   */
  PLT: "PLT",

  /**
   * Platelets and Plasma
   */
  PNP: "PNP",

  /**
   * Platelets and Red Cells
   */
  PNR: "PNR",

  /**
   * Platelets, Plasma, and Red Cells
   */
  PPR: "PPR",

  /**
   * Granulocytes
   */
  GRN: "GRN",

  /**
   * Hemachromatosis
   */
  HEM: "HEM",

  /**
   * Hematopoietic Progenitor Cells
   */
  HPC: "HPC",

  /**
   * Lymphocytes
   */
  LYM: "LYM",

  /**
   * Therapeutic Apheresis
   */
  THA: "THA",

  /**
   * Therapeutic Whole Blood
   */
  THW: "THW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSIntendedProcedureTypeCode =
  typeof Hl7VSIntendedProcedureTypeCode[keyof typeof Hl7VSIntendedProcedureTypeCode];
