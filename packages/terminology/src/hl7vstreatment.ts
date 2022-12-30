/**
 * Value Set of codes that identify the specimen treatment performed during lab processing.
 * http://terminology.hl7.org/ValueSet/v2-0373
 */
export const Hl7VSTreatmentCode = {
  /**
   * LDL Precipitation
   */
  LDLP: "LDLP",

  /**
   * Recalification
   */
  RECA: "RECA",

  /**
   * Defibrination
   */
  DEFB: "DEFB",

  /**
   * Acidification
   */
  ACID: "ACID",

  /**
   * Neutralization
   */
  NEUT: "NEUT",

  /**
   * Alkalization
   */
  ALK: "ALK",

  /**
   * Filtration
   */
  FILT: "FILT",

  /**
   * Ultrafiltration
   */
  UFIL: "UFIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTreatmentCode =
  typeof Hl7VSTreatmentCode[keyof typeof Hl7VSTreatmentCode];
