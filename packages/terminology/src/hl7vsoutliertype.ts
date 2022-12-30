/**
 * Value Set of codes that specify the type of outlier (i.e. period of care beyond DRG-standard stay in facility) that has been paid.
 * http://terminology.hl7.org/ValueSet/v2-0083
 */
export const Hl7VSOutlierTypeCode = {
  /**
   * Outlier days
   */
  D: "D",

  /**
   * Outlier cost
   */
  C: "C",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOutlierTypeCode =
  typeof Hl7VSOutlierTypeCode[keyof typeof Hl7VSOutlierTypeCode];
