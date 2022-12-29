/**
 * Set of codes related to specimen treatments
 * http://terminology.hl7.org/ValueSet/v3-ActSpecimenTreatmentCode
 */
export const ActSpecimenTreatmentCodeCode = {
  /**
   * Acidification
   */
  Acidification: "ACID",

  /**
   * Alkalization
   */
  Alkalization: "ALK",

  /**
   * Defibrination
   */
  Defibrination: "DEFB",

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
   * Recalcification
   */
  Recalcification: "RECA",

  /**
   * Ultrafiltration
   */
  Ultrafiltration: "UFIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSpecimenTreatmentCodeCode =
  typeof ActSpecimenTreatmentCodeCode[keyof typeof ActSpecimenTreatmentCodeCode];
