/**
 * The verification status to support or decline the clinical status of the condition or diagnosis.
 * http://hl7.org/fhir/ValueSet/condition-ver-status
 */
export const ConditionVerificationStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConditionVerificationStatusCode =
  typeof ConditionVerificationStatusCode[keyof typeof ConditionVerificationStatusCode];
