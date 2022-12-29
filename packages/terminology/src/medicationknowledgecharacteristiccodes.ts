/**
 * MedicationKnowledge Characteristic Codes
 * http://terminology.hl7.org/ValueSet/medicationknowledge-characteristic
 */
export const MedicationKnowledgeCharacteristicCodesCode = {
  /**
   * Imprint Code
   */
  ImprintCode: "imprintcd",

  /**
   * Size
   */
  Size: "size",

  /**
   * Shape
   */
  Shape: "shape",

  /**
   * Color
   */
  Color: "color",

  /**
   * Coating
   */
  Coating: "coating",

  /**
   * Scoring
   */
  Scoring: "scoring",

  /**
   * Logo
   */
  Logo: "logo",

  /**
   * Image
   */
  Image: "image",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationKnowledgeCharacteristicCodesCode =
  typeof MedicationKnowledgeCharacteristicCodesCode[keyof typeof MedicationKnowledgeCharacteristicCodesCode];
