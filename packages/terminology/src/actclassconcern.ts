/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActClassConcern
 */
export const ActClassConcernCode = {
  /**
   * concern
   */
  CONC: "CONC",

  /**
   * public health case
   */
  HCASE: "HCASE",

  /**
   * outbreak
   */
  OUTBR: "OUTBR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassConcernCode =
  typeof ActClassConcernCode[keyof typeof ActClassConcernCode];
