/**
 * An Act that is in the preparatory stages and may not yet be acted upon
 * http://terminology.hl7.org/ValueSet/v3-ActStatusNew
 */
export const ActStatusNewCode = {
  /**
   * new
   */
  new: "new",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusNewCode =
  typeof ActStatusNewCode[keyof typeof ActStatusNewCode];
