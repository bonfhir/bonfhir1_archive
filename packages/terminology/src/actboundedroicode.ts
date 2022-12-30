/**
 * Type of bounded ROI.
 * http://terminology.hl7.org/ValueSet/v3-ActBoundedROICode
 */
export const ActBoundedROICodeCode = {
  /**
   * fully specified ROI
   */
  ROIFS: "ROIFS",

  /**
   * partially specified ROI
   */
  ROIPS: "ROIPS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActBoundedROICodeCode =
  typeof ActBoundedROICodeCode[keyof typeof ActBoundedROICodeCode];
