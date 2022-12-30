/**
 * Value Set of codes that specify the type of tissue removed from a patient during a procedure.
 * http://terminology.hl7.org/ValueSet/v2-0417
 */
export const Hl7VSTissueTypeCodeCode = {
  /**
   * Insufficient Tissue
   */
  "1": "1",

  /**
   * Not abnormal
   */
  "2": "2",

  /**
   * Abnormal-not categorized
   */
  "3": "3",

  /**
   * Mechanical abnormal
   */
  "4": "4",

  /**
   * Growth alteration
   */
  "5": "5",

  /**
   * Degeneration & necrosis
   */
  "6": "6",

  /**
   * Non-acute inflammation
   */
  "7": "7",

  /**
   * Non-malignant neoplasm
   */
  "8": "8",

  /**
   * Malignant neoplasm
   */
  "9": "9",

  /**
   * No tissue expected
   */
  "0": "0",

  /**
   * Basal cell carcinoma
   */
  B: "B",

  /**
   * Carcinoma-unspecified type
   */
  C: "C",

  /**
   * Additional tissue required
   */
  G: "G",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTissueTypeCodeCode =
  typeof Hl7VSTissueTypeCodeCode[keyof typeof Hl7VSTissueTypeCodeCode];
