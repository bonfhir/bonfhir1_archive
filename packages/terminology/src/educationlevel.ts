/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EducationLevel
 */
export const EducationLevelCode = {
  /**
   * Associate's or technical degree complete
   */
  Associatesortechnicaldegreecomplete: "ASSOC",

  /**
   * College or baccalaureate degree complete
   */
  Collegeorbaccalaureatedegreecomplete: "BD",

  /**
   * Elementary School
   */
  ElementarySchool: "ELEM",

  /**
   * Graduate or professional Degree complete
   */
  GraduateorprofessionalDegreecomplete: "GD",

  /**
   * High School or secondary school degree complete
   */
  HighSchoolorsecondaryschooldegreecomplete: "HS",

  /**
   * Some post-baccalaureate education
   */
  Somepostbaccalaureateeducation: "PB",

  /**
   * Doctoral or post graduate education
   */
  Doctoralorpostgraduateeducation: "POSTG",

  /**
   * Some College education
   */
  SomeCollegeeducation: "SCOL",

  /**
   * Some secondary or high school education
   */
  Somesecondaryorhighschooleducation: "SEC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EducationLevelCode =
  typeof EducationLevelCode[keyof typeof EducationLevelCode];
