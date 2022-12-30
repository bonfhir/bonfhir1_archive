/**
 * Provides a categorization for annotations recorded directly against the patient
 * http://terminology.hl7.org/ValueSet/v3-ActPatientAnnotationType
 */
export const ActPatientAnnotationTypeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPatientAnnotationTypeCode =
  typeof ActPatientAnnotationTypeCode[keyof typeof ActPatientAnnotationTypeCode];
