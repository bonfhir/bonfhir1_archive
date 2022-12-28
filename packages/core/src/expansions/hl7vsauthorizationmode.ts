/**
 * Concepts of forms of authorization a recorder may receive from the responsible practitioner to create or change an order.  Used in Version 2 messaging for orders in the ORC segment.
 * http://terminology.hl7.org/ValueSet/v2-0483
 */
export const Hl7VSAuthorizationModeCode = {
  /**
   * Electronic
   */
  EL: "EL",

  /**
   * E-mail
   */
  EM: "EM",

  /**
   * Fax
   */
  FX: "FX",

  /**
   * In Person
   */
  IP: "IP",

  /**
   * Mail
   */
  MA: "MA",

  /**
   * Paper
   */
  PA: "PA",

  /**
   * Phone
   */
  PH: "PH",

  /**
   * Reflexive (Automated system)
   */
  RE: "RE",

  /**
   * Video-conference
   */
  VC: "VC",

  /**
   * Voice
   */
  VO: "VO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAuthorizationModeCode =
  typeof Hl7VSAuthorizationModeCode[keyof typeof Hl7VSAuthorizationModeCode];
