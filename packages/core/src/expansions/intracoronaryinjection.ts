/**
 * Injection, intracoronary
 * http://terminology.hl7.org/ValueSet/v3-IntracoronaryInjection
 */
export const IntracoronaryInjectionCode = {
  /**
   * Injection, intracoronary
   */
  ICORONINJ: "ICORONINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracoronaryInjectionCode =
  typeof IntracoronaryInjectionCode[keyof typeof IntracoronaryInjectionCode];
