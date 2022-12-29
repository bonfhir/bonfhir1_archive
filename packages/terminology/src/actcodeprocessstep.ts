/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActCodeProcessStep
 */
export const ActCodeProcessStepCode = {
  /**
   * Acidification
   */
  Acidification: "ACID",

  /**
   * Alkalization
   */
  Alkalization: "ALK",

  /**
   * corrected
   */
  corrected: "C",

  /**
   * Defibrination
   */
  Defibrination: "DEFB",

  /**
   * final
   */
  final: "F",

  /**
   * Filtration
   */
  Filtration: "FILT",

  /**
   * LDL Precipitation
   */
  LDLPrecipitation: "LDLP",

  /**
   * Neutralization
   */
  Neutralization: "NEUT",

  /**
   * preliminary
   */
  preliminary: "PRLMN",

  /**
   * Recalcification
   */
  Recalcification: "RECA",

  /**
   * specimen received
   */
  specimenreceived: "SREC",

  /**
   * specimen in storage
   */
  specimeninstorage: "SSTOR",

  /**
   * specimen in transit
   */
  specimenintransit: "STRAN",

  /**
   * Ultrafiltration
   */
  Ultrafiltration: "UFIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCodeProcessStepCode =
  typeof ActCodeProcessStepCode[keyof typeof ActCodeProcessStepCode];
