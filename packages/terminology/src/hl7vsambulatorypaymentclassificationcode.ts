/**
 * Value Set of codes that specify the derived Ambulatory Payment Classification (APC) code.
 * http://terminology.hl7.org/ValueSet/v2-0466
 */
export const Hl7VSAmbulatoryPaymentClassificationCodeCode = {
  /**
   * Dental procedures
   */
  "031": "031",

  /**
   * Excision/biopsy
   */
  "163": "163",

  /**
   * Level 1 skin repair.
   */
  "181": "181",

  /**
   * No suggested values defined
   */
  "...": "...",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAmbulatoryPaymentClassificationCodeCode =
  typeof Hl7VSAmbulatoryPaymentClassificationCodeCode[keyof typeof Hl7VSAmbulatoryPaymentClassificationCodeCode];
