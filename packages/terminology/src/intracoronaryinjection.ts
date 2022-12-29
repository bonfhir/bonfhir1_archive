/**
 * Injection, intracoronary
 * http://terminology.hl7.org/ValueSet/v3-IntracoronaryInjection
 */
export const IntracoronaryInjectionCode = {
  /**
   * Injection, intracoronary
   */
  Injectionintracoronary: "ICORONINJ",

  /**
   * Injection, intracoronary, push
   */
  Injectionintracoronarypush: "ICORONINJP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracoronaryInjectionCode =
  typeof IntracoronaryInjectionCode[keyof typeof IntracoronaryInjectionCode];
