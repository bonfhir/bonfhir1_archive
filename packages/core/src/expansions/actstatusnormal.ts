/**
 * Encompasses the expected states of an Act, but excludes "nullified" and "obsolete" which represent unusual terminal states for the life-cycle.
 * http://terminology.hl7.org/ValueSet/v3-ActStatusNormal
 */
export const ActStatusNormalCode = {
  /**
   * normal
   */
  normal: "normal",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusNormalCode =
  typeof ActStatusNormalCode[keyof typeof ActStatusNormalCode];
