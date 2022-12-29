/**
 * **Description:** Reporting codes that are related to an immunization event.
 * http://terminology.hl7.org/ValueSet/v3-PatientImmunizationRelatedObservationType
 */
export const PatientImmunizationRelatedObservationTypeCode = {
  /**
   * PatientImmunizationRelatedObservationType
   */
  PatientImmunizationRelatedObservationType:
    "_PatientImmunizationRelatedObservationType",

  /**
   * classroom
   */
  classroom: "CLSSRM",

  /**
   * grade
   */
  grade: "GRADE",

  /**
   * school
   */
  school: "SCHL",

  /**
   * school division
   */
  schooldivision: "SCHLDIV",

  /**
   * teacher
   */
  teacher: "TEACHER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PatientImmunizationRelatedObservationTypeCode =
  typeof PatientImmunizationRelatedObservationTypeCode[keyof typeof PatientImmunizationRelatedObservationTypeCode];
