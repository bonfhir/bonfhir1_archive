/**
 * Provides examples of reasons for actions to be performed.
 * http://hl7.org/fhir/ValueSet/action-reason-code
 */
export const ActionReasonCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActionReasonCodeCode =
  typeof ActionReasonCodeCode[keyof typeof ActionReasonCodeCode];
