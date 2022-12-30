/**
 * MedicationKnowledge Characteristic Codes
 * http://terminology.hl7.org/ValueSet/medicationknowledge-characteristic
 */
export const MedicationKnowledgeCharacteristicCodesCode = {
  /**
   * Imprint Code
   */
  imprintcd: "imprintcd",

  /**
   * Size
   */
  size: "size",

  /**
   * Shape
   */
  shape: "shape",

  /**
   * Color
   */
  color: "color",

  /**
   * Coating
   */
  coating: "coating",

  /**
   * Scoring
   */
  scoring: "scoring",

  /**
   * Logo
   */
  logo: "logo",

  /**
   * Image
   */
  image: "image",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationKnowledgeCharacteristicCodesCode =
  typeof MedicationKnowledgeCharacteristicCodesCode[keyof typeof MedicationKnowledgeCharacteristicCodesCode];
