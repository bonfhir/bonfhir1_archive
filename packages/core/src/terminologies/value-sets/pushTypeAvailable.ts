/**
 * Type of alerts/updates the primary source can send
 * http://hl7.org/fhir/ValueSet/verificationresult-push-type-available
 */
export const pushtypeavailableCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type pushtypeavailableCode =
  typeof pushtypeavailableCode[keyof typeof pushtypeavailableCode];
