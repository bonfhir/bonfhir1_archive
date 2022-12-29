/**
 * Concepts which identify conditions under which accept acknowledgments are required to be returned in response to a message, and required for enhanced acknowledgment mode.
 * http://terminology.hl7.org/ValueSet/v2-0155
 */
export const Hl7VSAcceptApplicationAcknowledgmentConditionsCode = {
  /**
   * Always
   */
  Always: "AL",

  /**
   * Never
   */
  Never: "NE",

  /**
   * Error/reject conditions only
   */
  Errorrejectconditionsonly: "ER",

  /**
   * Successful completion only
   */
  Successfulcompletiononly: "SU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAcceptApplicationAcknowledgmentConditionsCode =
  typeof Hl7VSAcceptApplicationAcknowledgmentConditionsCode[keyof typeof Hl7VSAcceptApplicationAcknowledgmentConditionsCode];
