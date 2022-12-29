/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EntityClassNonPersonLivingSubject
 */
export const EntityClassNonPersonLivingSubjectCode = {
  /**
   * non-person living subject
   */
  nonpersonlivingsubject: "NLIV",

  /**
   * animal
   */
  animal: "ANM",

  /**
   * microorganism
   */
  microorganism: "MIC",

  /**
   * plant
   */
  plant: "PLNT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassNonPersonLivingSubjectCode =
  typeof EntityClassNonPersonLivingSubjectCode[keyof typeof EntityClassNonPersonLivingSubjectCode];
