/**
 * Proposed therapy may be inappropriate or contraindicated due to conditions or characteristics of the patient
 * http://terminology.hl7.org/ValueSet/v3-ObservationDetectedIssueCode
 */
export const ObservationDetectedIssueCodeCode = {
  /**
   * Observation Alert
   */
  OBSA: "OBSA",

  /**
   * Age Alert
   */
  AGE: "AGE",

  /**
   * adult alert
   */
  ADALRT: "ADALRT",

  /**
   * High Dose for Age Alert
   */
  DOSEHINDA: "DOSEHINDA",

  /**
   * Low Dose for Age Alert
   */
  DOSELINDA: "DOSELINDA",

  /**
   * geriatric alert
   */
  GEALRT: "GEALRT",

  /**
   * pediatric alert
   */
  PEALRT: "PEALRT",

  /**
   * Condition Alert
   */
  COND: "COND",

  /**
   *
   */
  HGHT: "HGHT",

  /**
   * Lactation Alert
   */
  LACT: "LACT",

  /**
   * Pregnancy Alert
   */
  PREG: "PREG",

  /**
   *
   */
  WGHT: "WGHT",

  /**
   * common reaction alert
   */
  CREACT: "CREACT",

  /**
   * Genetic Alert
   */
  GEN: "GEN",

  /**
   * Gender Alert
   */
  GEND: "GEND",

  /**
   * Lab Alert
   */
  LAB: "LAB",

  /**
   * Reaction Alert
   */
  REACT: "REACT",

  /**
   * Allergy Alert
   */
  ALGY: "ALGY",

  /**
   * Intolerance Alert
   */
  INT: "INT",

  /**
   * Related Reaction Alert
   */
  RREACT: "RREACT",

  /**
   * Related Allergy Alert
   */
  RALG: "RALG",

  /**
   * Related Prior Reaction Alert
   */
  RAR: "RAR",

  /**
   * Related Intolerance Alert
   */
  RINT: "RINT",

  /**
   * High Dose for Weight Alert
   */
  DOSEHINDW: "DOSEHINDW",

  /**
   * Low Dose for Weight Alert
   */
  DOSELINDW: "DOSELINDW",

  /**
   * High Dose for Height/Surface Area Alert
   */
  DOSEHINDSA: "DOSEHINDSA",

  /**
   * Low Dose for Height/Surface Area Alert
   */
  DOSELINDSA: "DOSELINDSA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationDetectedIssueCodeCode =
  typeof ObservationDetectedIssueCodeCode[keyof typeof ObservationDetectedIssueCodeCode];
