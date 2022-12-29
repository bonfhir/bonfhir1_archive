/**
 * Provides a categorization for annotations recorded directly against the patient
 * http://terminology.hl7.org/ValueSet/v3-ActPatientAnnotationType
 */
export const ActPatientAnnotationTypeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPatientAnnotationTypeCode =
  typeof ActPatientAnnotationTypeCode[keyof typeof ActPatientAnnotationTypeCode];
