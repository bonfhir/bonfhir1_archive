/**
 * Set of codes indicating the type of incident or accident.
 * http://terminology.hl7.org/ValueSet/v3-ActIncidentCode
 */
export const ActIncidentCodeCode = {
  /**
   * Motor vehicle accident
   */
  MVA: "MVA",

  /**
   * School Accident
   */
  SCHOOL: "SCHOOL",

  /**
   * Sporting Accident
   */
  SPT: "SPT",

  /**
   * Workplace accident
   */
  WPA: "WPA",

  /**
   * ActPatientSafetyIncidentCode
   */
  _ActPatientSafetyIncidentCode: "_ActPatientSafetyIncidentCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActIncidentCodeCode =
  typeof ActIncidentCodeCode[keyof typeof ActIncidentCodeCode];
