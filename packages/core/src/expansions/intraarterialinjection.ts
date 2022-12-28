/**
 * Injection, intraarterial
 * http://terminology.hl7.org/ValueSet/v3-IntraarterialInjection
 */
export const IntraarterialInjectionCode = {
  /**
   * Injection, intraarterial
   */
  IAINJ: "IAINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntraarterialInjectionCode =
  typeof IntraarterialInjectionCode[keyof typeof IntraarterialInjectionCode];
