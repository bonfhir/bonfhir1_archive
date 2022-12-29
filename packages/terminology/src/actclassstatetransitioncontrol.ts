/**
 * Sender transmits a status change pertaining to the focal act of the payload. This status of the focal act is the final state of the state transition. This can be either a request or a command, according to the mood of the control act.
 * http://terminology.hl7.org/ValueSet/v3-ActClassStateTransitionControl
 */
export const ActClassStateTransitionControlCode = {
  /**
   * state transition control
   */
  statetransitioncontrol: "STC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassStateTransitionControlCode =
  typeof ActClassStateTransitionControlCode[keyof typeof ActClassStateTransitionControlCode];
