/**
 * This Act instance has been replaced by a new instance.
 * http://terminology.hl7.org/ValueSet/v3-ActStatusObsolete
 */
export const ActStatusObsoleteCode = {
  /**
   * obsolete
   */
  obsolete: "obsolete",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusObsoleteCode =
  typeof ActStatusObsoleteCode[keyof typeof ActStatusObsoleteCode];
