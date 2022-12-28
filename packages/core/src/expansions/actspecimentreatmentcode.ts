/**
 * Set of codes related to specimen treatments
 * http://terminology.hl7.org/ValueSet/v3-ActSpecimenTreatmentCode
 */
export const ActSpecimenTreatmentCodeCode = {
  /**
   * Acidification
   */
  ACID: "ACID",

  /**
   * Alkalization
   */
  ALK: "ALK",

  /**
   * Defibrination
   */
  DEFB: "DEFB",

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
   * Recalcification
   */
  RECA: "RECA",

  /**
   * Ultrafiltration
   */
  UFIL: "UFIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSpecimenTreatmentCodeCode =
  typeof ActSpecimenTreatmentCodeCode[keyof typeof ActSpecimenTreatmentCodeCode];
