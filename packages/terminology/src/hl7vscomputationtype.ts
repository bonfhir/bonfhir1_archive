/**
 * Value Set of codes that specify if the change is computed as a percent change or as an absolute change.
 * http://terminology.hl7.org/ValueSet/v2-0523
 */
export const Hl7VSComputationTypeCode = {
  /**
   * Indicates a percent change
   */
  "%": "%",

  /**
   * Absolute Change
   */
  a: "a",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSComputationTypeCode =
  typeof Hl7VSComputationTypeCode[keyof typeof Hl7VSComputationTypeCode];
