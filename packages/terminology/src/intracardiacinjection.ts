/**
 * Injection, intracardiac
 * http://terminology.hl7.org/ValueSet/v3-IntracardiacInjection
 */
export const IntracardiacInjectionCode = {
  /**
   * Injection, intracardiac
   */
  Injectionintracardiac: "ICARDINJ",

  /**
   * Injection, intracardiac, rapid push
   */
  Injectionintracardiacrapidpush: "ICARDINJRP",

  /**
   * Injection, intracardiac, slow push
   */
  Injectionintracardiacslowpush: "ICARDINJSP",

  /**
   * Injection, intracardiac, push
   */
  Injectionintracardiacpush: "ICARINJP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntracardiacInjectionCode =
  typeof IntracardiacInjectionCode[keyof typeof IntracardiacInjectionCode];
