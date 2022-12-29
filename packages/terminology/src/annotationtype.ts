/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-AnnotationType
 */
export const AnnotationTypeCode = {
  /**
   * ActPatientAnnotationType
   */
  ActPatientAnnotationType: "_ActPatientAnnotationType",

  /**
   * diagnostic image note
   */
  diagnosticimagenote: "ANNDI",

  /**
   * general note
   */
  generalnote: "ANNGEN",

  /**
   * immunization note
   */
  immunizationnote: "ANNIMM",

  /**
   * laboratory note
   */
  laboratorynote: "ANNLAB",

  /**
   * medication note
   */
  medicationnote: "ANNMED",

  /**
   * ECGAnnotationType
   */
  ECGAnnotationType: "_ECGAnnotationType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AnnotationTypeCode =
  typeof AnnotationTypeCode[keyof typeof AnnotationTypeCode];
