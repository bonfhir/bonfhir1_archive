/**
 * This Act instance was created in error and has been 'removed' and is treated as though it never existed. A record is retained for audit purposes only.
 * http://terminology.hl7.org/ValueSet/v3-ActStatusNullified
 */
export const ActStatusNullifiedCode = {
  /**
   * nullified
   */
  nullified: "nullified",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusNullifiedCode =
  typeof ActStatusNullifiedCode[keyof typeof ActStatusNullifiedCode];
