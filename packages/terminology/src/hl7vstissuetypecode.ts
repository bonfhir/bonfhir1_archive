/**
 * Value Set of codes that specify the type of tissue removed from a patient during a procedure.
 * http://terminology.hl7.org/ValueSet/v2-0417
 */
export const Hl7VSTissueTypeCodeCode = {
  /**
   * Insufficient Tissue
   */
  InsufficientTissue: "1",

  /**
   * Not abnormal
   */
  Notabnormal: "2",

  /**
   * Abnormal-not categorized
   */
  Abnormalnotcategorized: "3",

  /**
   * Mechanical abnormal
   */
  Mechanicalabnormal: "4",

  /**
   * Growth alteration
   */
  Growthalteration: "5",

  /**
   * Degeneration & necrosis
   */
  Degenerationnecrosis: "6",

  /**
   * Non-acute inflammation
   */
  Nonacuteinflammation: "7",

  /**
   * Non-malignant neoplasm
   */
  Nonmalignantneoplasm: "8",

  /**
   * Malignant neoplasm
   */
  Malignantneoplasm: "9",

  /**
   * No tissue expected
   */
  Notissueexpected: "0",

  /**
   * Basal cell carcinoma
   */
  Basalcellcarcinoma: "B",

  /**
   * Carcinoma-unspecified type
   */
  Carcinomaunspecifiedtype: "C",

  /**
   * Additional tissue required
   */
  Additionaltissuerequired: "G",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTissueTypeCodeCode =
  typeof Hl7VSTissueTypeCodeCode[keyof typeof Hl7VSTissueTypeCodeCode];
