/**
 * Common Tag Codes defined by FHIR project
 * http://terminology.hl7.org/ValueSet/common-tags
 */
export const CommonTagsCode = {
  /**
   * Actionable
   */
  actionable: "actionable",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CommonTagsCode = typeof CommonTagsCode[keyof typeof CommonTagsCode];
