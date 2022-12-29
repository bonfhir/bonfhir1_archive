/**
 * Anything that essentially has the property of life, independent of current state (a dead human corpse is still essentially a living subject.)
 * http://terminology.hl7.org/ValueSet/v3-EntityClassLivingSubject
 */
export const EntityClassLivingSubjectCode = {
  /**
   * living subject
   */
  livingsubject: "LIV",

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

  /**
   * person
   */
  person: "PSN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassLivingSubjectCode =
  typeof EntityClassLivingSubjectCode[keyof typeof EntityClassLivingSubjectCode];
