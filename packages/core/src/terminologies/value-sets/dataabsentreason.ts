/**
 * Used to specify why the normally expected content of the data element is missing.
 * http://hl7.org/fhir/ValueSet/data-absent-reason
 */
export const DataAbsentReasonCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DataAbsentReasonCode =
  typeof DataAbsentReasonCode[keyof typeof DataAbsentReasonCode];
