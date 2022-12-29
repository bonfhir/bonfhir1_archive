/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Delawaran
 */
export const DelawaranCode = {
  /**
   * Unami Delaware
   */
  UnamiDelaware: "x-DEL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DelawaranCode = typeof DelawaranCode[keyof typeof DelawaranCode];
