/**
 * Value Set of codes specifying a type of PCA.
 * http://terminology.hl7.org/ValueSet/v2-0918
 */
export const Hl7VSPcaTypeCode = {
  /**
   * Continuous
   */
  Continuous: "C",

  /**
   * PCA Only
   */
  PCAOnly: "P",

  /**
   * PCA + Continuous
   */
  PCAContinuous: "PC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPcaTypeCode =
  typeof Hl7VSPcaTypeCode[keyof typeof Hl7VSPcaTypeCode];
