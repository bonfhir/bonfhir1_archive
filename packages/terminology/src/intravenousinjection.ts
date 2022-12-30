/**
 * Injection, intravenous
 * http://terminology.hl7.org/ValueSet/v3-IntravenousInjection
 */
export const IntravenousInjectionCode = {
  /**
   * Injection, intravenous
   */
  IVINJ: "IVINJ",

  /**
   * Injection, intravenous, bolus
   */
  IVINJBOL: "IVINJBOL",

  /**
   * Injection, intravenous, push
   */
  IVPUSH: "IVPUSH",

  /**
   * Injection, intravenous, rapid push
   */
  IVRPUSH: "IVRPUSH",

  /**
   * Injection, intravenous, slow push
   */
  IVSPUSH: "IVSPUSH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntravenousInjectionCode =
  typeof IntravenousInjectionCode[keyof typeof IntravenousInjectionCode];
