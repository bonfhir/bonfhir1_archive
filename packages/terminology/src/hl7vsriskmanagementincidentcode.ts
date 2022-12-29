/**
 * Value Set of codes specifying the incident that occurred during a patient's stay.
 * http://terminology.hl7.org/ValueSet/v2-0427
 */
export const Hl7VSRiskManagementIncidentCodeCode = {
  /**
   * Body fluid exposure
   */
  Bodyfluidexposure: "B",

  /**
   * Contaminated Substance
   */
  ContaminatedSubstance: "C",

  /**
   * Diet Errors
   */
  DietErrors: "D",

  /**
   * Equipment problem
   */
  Equipmentproblem: "E",

  /**
   * Patient fell (not from bed)
   */
  Patientfellnotfrombed: "F",

  /**
   * Patient fell from bed
   */
  Patientfellfrombed: "H",

  /**
   * Infusion error
   */
  Infusionerror: "I",

  /**
   * Foreign object left during surgery
   */
  Foreignobjectleftduringsurgery: "J",

  /**
   * Sterile precaution violated
   */
  Sterileprecautionviolated: "K",

  /**
   * Procedure error
   */
  Procedureerror: "P",

  /**
   * Pharmaceutical error
   */
  Pharmaceuticalerror: "R",

  /**
   * Suicide Attempt
   */
  SuicideAttempt: "S",

  /**
   * Transfusion error
   */
  Transfusionerror: "T",

  /**
   * Other
   */
  Other: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRiskManagementIncidentCodeCode =
  typeof Hl7VSRiskManagementIncidentCodeCode[keyof typeof Hl7VSRiskManagementIncidentCodeCode];
