/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ObservationSequenceType
 */
export const ObservationSequenceTypeCode = {
  /**
   * absolute time sequence
   */
  TIME_ABSOLUTE: "TIME_ABSOLUTE",

  /**
   * relative time sequence
   */
  TIME_RELATIVE: "TIME_RELATIVE",

  /**
   * ECGObservationSequenceType
   */
  _ECGObservationSequenceType: "_ECGObservationSequenceType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationSequenceTypeCode =
  typeof ObservationSequenceTypeCode[keyof typeof ObservationSequenceTypeCode];
