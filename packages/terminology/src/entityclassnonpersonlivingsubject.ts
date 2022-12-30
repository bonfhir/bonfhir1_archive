/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EntityClassNonPersonLivingSubject
 */
export const EntityClassNonPersonLivingSubjectCode = {
  /**
   * non-person living subject
   */
  NLIV: "NLIV",

  /**
   * animal
   */
  ANM: "ANM",

  /**
   * microorganism
   */
  MIC: "MIC",

  /**
   * plant
   */
  PLNT: "PLNT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassNonPersonLivingSubjectCode =
  typeof EntityClassNonPersonLivingSubjectCode[keyof typeof EntityClassNonPersonLivingSubjectCode];
