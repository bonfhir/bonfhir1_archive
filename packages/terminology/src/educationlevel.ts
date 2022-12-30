/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EducationLevel
 */
export const EducationLevelCode = {
  /**
   * Associate's or technical degree complete
   */
  ASSOC: "ASSOC",

  /**
   * College or baccalaureate degree complete
   */
  BD: "BD",

  /**
   * Elementary School
   */
  ELEM: "ELEM",

  /**
   * Graduate or professional Degree complete
   */
  GD: "GD",

  /**
   * High School or secondary school degree complete
   */
  HS: "HS",

  /**
   * Some post-baccalaureate education
   */
  PB: "PB",

  /**
   * Doctoral or post graduate education
   */
  POSTG: "POSTG",

  /**
   * Some College education
   */
  SCOL: "SCOL",

  /**
   * Some secondary or high school education
   */
  SEC: "SEC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EducationLevelCode =
  typeof EducationLevelCode[keyof typeof EducationLevelCode];
