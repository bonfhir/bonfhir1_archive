/**
 * Type of bounded ROI.
 * http://terminology.hl7.org/ValueSet/v3-ActBoundedROICode
 */
export const ActBoundedROICodeCode = {
  /**
   * fully specified ROI
   */
  fullyspecifiedROI: "ROIFS",

  /**
   * partially specified ROI
   */
  partiallyspecifiedROI: "ROIPS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActBoundedROICodeCode =
  typeof ActBoundedROICodeCode[keyof typeof ActBoundedROICodeCode];
