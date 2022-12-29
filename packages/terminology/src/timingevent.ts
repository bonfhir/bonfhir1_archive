/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-TimingEvent
 */
export const TimingEventCode = {
  /**
   * AC
   */
  AC: "AC",

  /**
   * ACD
   */
  ACD: "ACD",

  /**
   * ACM
   */
  ACM: "ACM",

  /**
   * ACV
   */
  ACV: "ACV",

  /**
   * C
   */
  C: "C",

  /**
   * CD
   */
  CD: "CD",

  /**
   * CM
   */
  CM: "CM",

  /**
   * CV
   */
  CV: "CV",

  /**
   * HS
   */
  HS: "HS",

  /**
   * IC
   */
  IC: "IC",

  /**
   * ICD
   */
  ICD: "ICD",

  /**
   * ICM
   */
  ICM: "ICM",

  /**
   * ICV
   */
  ICV: "ICV",

  /**
   * PC
   */
  PC: "PC",

  /**
   * PCD
   */
  PCD: "PCD",

  /**
   * PCM
   */
  PCM: "PCM",

  /**
   * PCV
   */
  PCV: "PCV",

  /**
   * WAKE
   */
  WAKE: "WAKE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TimingEventCode =
  typeof TimingEventCode[keyof typeof TimingEventCode];
