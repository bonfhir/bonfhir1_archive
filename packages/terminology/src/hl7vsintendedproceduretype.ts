/**
 * Value Set of codes specifying the type of intended procedure.
 * http://terminology.hl7.org/ValueSet/v2-0933
 */
export const Hl7VSIntendedProcedureTypeCode = {
  /**
   * Whole Blood
   */
  WholeBlood: "WBL",

  /**
   * Double Red Cells
   */
  DoubleRedCells: "2RC",

  /**
   * Plasma
   */
  Plasma: "PLS",

  /**
   * Platelets
   */
  Platelets: "PLT",

  /**
   * Platelets and Plasma
   */
  PlateletsandPlasma: "PNP",

  /**
   * Platelets and Red Cells
   */
  PlateletsandRedCells: "PNR",

  /**
   * Platelets, Plasma, and Red Cells
   */
  PlateletsPlasmaandRedCells: "PPR",

  /**
   * Granulocytes
   */
  Granulocytes: "GRN",

  /**
   * Hemachromatosis
   */
  Hemachromatosis: "HEM",

  /**
   * Hematopoietic Progenitor Cells
   */
  HematopoieticProgenitorCells: "HPC",

  /**
   * Lymphocytes
   */
  Lymphocytes: "LYM",

  /**
   * Therapeutic Apheresis
   */
  TherapeuticApheresis: "THA",

  /**
   * Therapeutic Whole Blood
   */
  TherapeuticWholeBlood: "THW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSIntendedProcedureTypeCode =
  typeof Hl7VSIntendedProcedureTypeCode[keyof typeof Hl7VSIntendedProcedureTypeCode];
