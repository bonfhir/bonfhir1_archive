/**
 * **Description:** Reporting codes that are related to an immunization event.
 * http://terminology.hl7.org/ValueSet/v3-PatientImmunizationRelatedObservationType
 */
export const PatientImmunizationRelatedObservationTypeCode = {
  /**
   * PatientImmunizationRelatedObservationType
   */
  _PatientImmunizationRelatedObservationType:
    "_PatientImmunizationRelatedObservationType",

  /**
   * classroom
   */
  CLSSRM: "CLSSRM",

  /**
   * grade
   */
  GRADE: "GRADE",

  /**
   * school
   */
  SCHL: "SCHL",

  /**
   * school division
   */
  SCHLDIV: "SCHLDIV",

  /**
   * teacher
   */
  TEACHER: "TEACHER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PatientImmunizationRelatedObservationTypeCode =
  typeof PatientImmunizationRelatedObservationTypeCode[keyof typeof PatientImmunizationRelatedObservationTypeCode];
