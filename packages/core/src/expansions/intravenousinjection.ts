/**
 * Injection, intravenous
 * http://terminology.hl7.org/ValueSet/v3-IntravenousInjection
 */
export const IntravenousInjectionCode = {
  /**
   * Injection, intravenous
   */
  IVINJ: "IVINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntravenousInjectionCode =
  typeof IntravenousInjectionCode[keyof typeof IntravenousInjectionCode];
