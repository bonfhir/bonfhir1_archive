/**
 * Concepts of forms of authorization a recorder may receive from the responsible practitioner to create or change an order.  Used in Version 2 messaging for orders in the ORC segment.
 * http://terminology.hl7.org/ValueSet/v2-0483
 */
export const Hl7VSAuthorizationModeCode = {
  /**
   * Electronic
   */
  Electronic: "EL",

  /**
   * E-mail
   */
  Email: "EM",

  /**
   * Fax
   */
  Fax: "FX",

  /**
   * In Person
   */
  InPerson: "IP",

  /**
   * Mail
   */
  Mail: "MA",

  /**
   * Paper
   */
  Paper: "PA",

  /**
   * Phone
   */
  Phone: "PH",

  /**
   * Reflexive (Automated system)
   */
  ReflexiveAutomatedsystem: "RE",

  /**
   * Video-conference
   */
  Videoconference: "VC",

  /**
   * Voice
   */
  Voice: "VO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAuthorizationModeCode =
  typeof Hl7VSAuthorizationModeCode[keyof typeof Hl7VSAuthorizationModeCode];
