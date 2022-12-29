/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActClassGrouper
 */
export const ActClassGrouperCode = {
  /**
   * grouper
   */
  grouper: "GROUPER",

  /**
   * Cluster
   */
  Cluster: "CLUSTER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassGrouperCode =
  typeof ActClassGrouperCode[keyof typeof ActClassGrouperCode];
