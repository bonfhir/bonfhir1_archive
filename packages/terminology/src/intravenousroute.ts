/**
 * Intravenous
 * http://terminology.hl7.org/ValueSet/v3-IntravenousRoute
 */
export const IntravenousRouteCode = {
  /**
   * Flush, intravenous catheter
   */
  Flushintravenouscatheter: "IVFLUSH",

  /**
   * Injection, intravenous
   */
  Injectionintravenous: "IVINJ",

  /**
   * Injection, intravenous, bolus
   */
  Injectionintravenousbolus: "IVINJBOL",

  /**
   * Injection, intravenous, push
   */
  Injectionintravenouspush: "IVPUSH",

  /**
   * Injection, intravenous, rapid push
   */
  Injectionintravenousrapidpush: "IVRPUSH",

  /**
   * Injection, intravenous, slow push
   */
  Injectionintravenousslowpush: "IVSPUSH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IntravenousRouteCode =
  typeof IntravenousRouteCode[keyof typeof IntravenousRouteCode];
