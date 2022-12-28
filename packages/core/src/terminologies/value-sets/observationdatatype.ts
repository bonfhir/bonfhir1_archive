/**
 * Permitted data type for observation value.
 * http://hl7.org/fhir/ValueSet/permitted-data-type
 */
export const ObservationDataTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationDataTypeCode =
  typeof ObservationDataTypeCode[keyof typeof ObservationDataTypeCode];
