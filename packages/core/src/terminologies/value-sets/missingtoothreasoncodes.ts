/**
 * This value set includes sample Missing Tooth Reason codes.
 * http://hl7.org/fhir/ValueSet/missing-tooth-reason
 */
export const MissingToothReasonCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MissingToothReasonCodesCode =
  typeof MissingToothReasonCodesCode[keyof typeof MissingToothReasonCodesCode];
