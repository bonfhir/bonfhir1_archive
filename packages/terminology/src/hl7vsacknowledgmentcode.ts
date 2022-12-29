/**
 * Concepts specifying acknowledgment codes used in Version 2.x message.  For details of usage, see message processing rules in the published Standard.
 * http://terminology.hl7.org/ValueSet/v2-0008
 */
export const Hl7VSAcknowledgmentCodeCode = {
  /**
   * Original mode: Application Accept - Enhanced mode: Application acknowledgment: Accept
   */
  OriginalmodeApplicationAcceptEnhancedmodeApplicationacknowledgmentAccept:
    "AA",

  /**
   * Original mode: Application Error - Enhanced mode: Application acknowledgment: Error
   */
  OriginalmodeApplicationErrorEnhancedmodeApplicationacknowledgmentError: "AE",

  /**
   * Original mode: Application Reject - Enhanced mode: Application acknowledgment: Reject
   */
  OriginalmodeApplicationRejectEnhancedmodeApplicationacknowledgmentReject:
    "AR",

  /**
   * Enhanced mode: Accept acknowledgment: Commit Accept
   */
  EnhancedmodeAcceptacknowledgmentCommitAccept: "CA",

  /**
   * Enhanced mode: Accept acknowledgment: Commit Error
   */
  EnhancedmodeAcceptacknowledgmentCommitError: "CE",

  /**
   * Enhanced mode: Accept acknowledgment: Commit Reject
   */
  EnhancedmodeAcceptacknowledgmentCommitReject: "CR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAcknowledgmentCodeCode =
  typeof Hl7VSAcknowledgmentCodeCode[keyof typeof Hl7VSAcknowledgmentCodeCode];
