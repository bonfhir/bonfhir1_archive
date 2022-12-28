/**
 * Intravenous
 * http://terminology.hl7.org/ValueSet/v3-IntravenousRoute
 */
export const IntravenousRouteCode = {
  /**
   * Flush, intravenous catheter
   */
  IVFLUSH: "IVFLUSH",

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
export type IntravenousRouteCode =
  typeof IntravenousRouteCode[keyof typeof IntravenousRouteCode];
