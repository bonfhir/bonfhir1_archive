/**
 * Value Set of codes that specify codes for an event precipitating/triggering a charge activity.
 * http://terminology.hl7.org/ValueSet/v2-0100
 */
export const Hl7VSWhenToChargeCode = {
  /**
   * On discharge
   */
  Ondischarge: "D",

  /**
   * On receipt of order
   */
  Onreceiptoforder: "O",

  /**
   * At time service is completed
   */
  Attimeserviceiscompleted: "R",

  /**
   * At time service is started
   */
  Attimeserviceisstarted: "S",

  /**
   * At a designated date/time
   */
  Atadesignateddatetime: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSWhenToChargeCode =
  typeof Hl7VSWhenToChargeCode[keyof typeof Hl7VSWhenToChargeCode];
