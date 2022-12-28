/**
 * Injection, intracardiac
 * http://terminology.hl7.org/ValueSet/v3-IntracardiacInjection
 */
export const IntracardiacInjectionCode = {
  /**
   * Injection, intracardiac
   */
  ICARDINJ: "ICARDINJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracardiacInjectionCode =
  typeof IntracardiacInjectionCode[keyof typeof IntracardiacInjectionCode];
