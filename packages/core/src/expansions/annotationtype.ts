/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-AnnotationType
 */
export const AnnotationTypeCode = {
  /**
   * ActPatientAnnotationType
   */
  _ActPatientAnnotationType: "_ActPatientAnnotationType",

  /**
   * diagnostic image note
   */
  ANNDI: "ANNDI",

  /**
   * general note
   */
  ANNGEN: "ANNGEN",

  /**
   * immunization note
   */
  ANNIMM: "ANNIMM",

  /**
   * laboratory note
   */
  ANNLAB: "ANNLAB",

  /**
   * medication note
   */
  ANNMED: "ANNMED",

  /**
   * ECGAnnotationType
   */
  _ECGAnnotationType: "_ECGAnnotationType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AnnotationTypeCode =
  typeof AnnotationTypeCode[keyof typeof AnnotationTypeCode];
