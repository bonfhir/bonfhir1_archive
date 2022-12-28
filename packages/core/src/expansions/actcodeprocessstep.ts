/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActCodeProcessStep
 */
export const ActCodeProcessStepCode = {
  /**
   * Acidification
   */
  ACID: "ACID",

  /**
   * Alkalization
   */
  ALK: "ALK",

  /**
   * corrected
   */
  C: "C",

  /**
   * Defibrination
   */
  DEFB: "DEFB",

  /**
   * final
   */
  F: "F",

  /**
   * Filtration
   */
  FILT: "FILT",

  /**
   * LDL Precipitation
   */
  LDLP: "LDLP",

  /**
   * Neutralization
   */
  NEUT: "NEUT",

  /**
   * preliminary
   */
  PRLMN: "PRLMN",

  /**
   * Recalcification
   */
  RECA: "RECA",

  /**
   * specimen received
   */
  SREC: "SREC",

  /**
   * specimen in storage
   */
  SSTOR: "SSTOR",

  /**
   * specimen in transit
   */
  STRAN: "STRAN",

  /**
   * Ultrafiltration
   */
  UFIL: "UFIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCodeProcessStepCode =
  typeof ActCodeProcessStepCode[keyof typeof ActCodeProcessStepCode];
