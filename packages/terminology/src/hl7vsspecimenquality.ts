/**
 * Value Set of codes that specify the degree or grade of excellence of the specimen at receipt.
 * http://terminology.hl7.org/ValueSet/v2-0491
 */
export const Hl7VSSpecimenQualityCode = {
  /**
   * Excellent
   */
  Excellent: "E",

  /**
   * Good
   */
  Good: "G",

  /**
   * Fair
   */
  Fair: "F",

  /**
   * Poor
   */
  Poor: "P",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecimenQualityCode =
  typeof Hl7VSSpecimenQualityCode[keyof typeof Hl7VSSpecimenQualityCode];
