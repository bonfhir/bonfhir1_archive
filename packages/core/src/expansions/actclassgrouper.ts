/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActClassGrouper
 */
export const ActClassGrouperCode = {
  /**
   * grouper
   */
  GROUPER: "GROUPER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassGrouperCode =
  typeof ActClassGrouperCode[keyof typeof ActClassGrouperCode];
