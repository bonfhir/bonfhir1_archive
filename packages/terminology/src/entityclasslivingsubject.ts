/**
 * Anything that essentially has the property of life, independent of current state (a dead human corpse is still essentially a living subject.)
 * http://terminology.hl7.org/ValueSet/v3-EntityClassLivingSubject
 */
export const EntityClassLivingSubjectCode = {
  /**
   * living subject
   */
  LIV: "LIV",

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

  /**
   * person
   */
  PSN: "PSN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassLivingSubjectCode =
  typeof EntityClassLivingSubjectCode[keyof typeof EntityClassLivingSubjectCode];
