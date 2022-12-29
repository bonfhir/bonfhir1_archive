/**
 * Value Set of codes that identify the specimen treatment performed during lab processing.
 * http://terminology.hl7.org/ValueSet/v2-0373
 */
export const Hl7VSTreatmentCode = {
  /**
   * LDL Precipitation
   */
  LDLPrecipitation: "LDLP",

  /**
   * Recalification
   */
  Recalification: "RECA",

  /**
   * Defibrination
   */
  Defibrination: "DEFB",

  /**
   * Acidification
   */
  Acidification: "ACID",

  /**
   * Neutralization
   */
  Neutralization: "NEUT",

  /**
   * Alkalization
   */
  Alkalization: "ALK",

  /**
   * Filtration
   */
  Filtration: "FILT",

  /**
   * Ultrafiltration
   */
  Ultrafiltration: "UFIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTreatmentCode =
  typeof Hl7VSTreatmentCode[keyof typeof Hl7VSTreatmentCode];
