/**
 * Value Set of codes that specify the derived Ambulatory Payment Classification (APC) code.
 * http://terminology.hl7.org/ValueSet/v2-0466
 */
export const Hl7VSAmbulatoryPaymentClassificationCodeCode = {
  /**
   * Dental procedures
   */
  Dentalprocedures: "031",

  /**
   * Excision/biopsy
   */
  Excisionbiopsy: "163",

  /**
   * Level 1 skin repair.
   */
  Level1skinrepair: "181",

  /**
   * No suggested values defined
   */
  Nosuggestedvaluesdefined: "...",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAmbulatoryPaymentClassificationCodeCode =
  typeof Hl7VSAmbulatoryPaymentClassificationCodeCode[keyof typeof Hl7VSAmbulatoryPaymentClassificationCodeCode];
