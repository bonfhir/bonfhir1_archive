/**
 * Value Set of codes that classify whether a patient visit can be related to a diagnosis.
 * http://terminology.hl7.org/ValueSet/v2-0228
 */
export const Hl7VSDiagnosisClassificationCode = {
  /**
   * Consultation
   */
  Consultation: "C",

  /**
   * Diagnosis
   */
  Diagnosis: "D",

  /**
   * Medication (antibiotic)
   */
  Medicationantibiotic: "M",

  /**
   * Other
   */
  Other: "O",

  /**
   * Radiological scheduling (not using ICDA codes)
   */
  RadiologicalschedulingnotusingICDAcodes: "R",

  /**
   * Sign and symptom
   */
  Signandsymptom: "S",

  /**
   * Tissue diagnosis
   */
  Tissuediagnosis: "T",

  /**
   * Invasive procedure not classified elsewhere (I.V., catheter, etc.)
   */
  InvasiveprocedurenotclassifiedelsewhereIVcatheteretc: "I",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDiagnosisClassificationCode =
  typeof Hl7VSDiagnosisClassificationCode[keyof typeof Hl7VSDiagnosisClassificationCode];
