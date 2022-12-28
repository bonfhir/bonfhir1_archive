/**
 * Value Set of codes that classify whether a patient visit can be related to a diagnosis.
 * http://terminology.hl7.org/ValueSet/v2-0228
 */
export const Hl7VSDiagnosisClassificationCode = {
  /**
   * Consultation
   */
  C: "C",

  /**
   * Diagnosis
   */
  D: "D",

  /**
   * Medication (antibiotic)
   */
  M: "M",

  /**
   * Other
   */
  O: "O",

  /**
   * Radiological scheduling (not using ICDA codes)
   */
  R: "R",

  /**
   * Sign and symptom
   */
  S: "S",

  /**
   * Tissue diagnosis
   */
  T: "T",

  /**
   * Invasive procedure not classified elsewhere (I.V., catheter, etc.)
   */
  I: "I",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDiagnosisClassificationCode =
  typeof Hl7VSDiagnosisClassificationCode[keyof typeof Hl7VSDiagnosisClassificationCode];
