/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EntityClassNonPersonLivingSubject
 */
export const EntityClassNonPersonLivingSubjectCode = {
  /**
   * non-person living subject
   */
  NLIV: "NLIV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassNonPersonLivingSubjectCode =
  typeof EntityClassNonPersonLivingSubjectCode[keyof typeof EntityClassNonPersonLivingSubjectCode];
