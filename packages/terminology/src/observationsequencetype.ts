/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ObservationSequenceType
 */
export const ObservationSequenceTypeCode = {
  /**
   * absolute time sequence
   */
  absolutetimesequence: "TIME_ABSOLUTE",

  /**
   * relative time sequence
   */
  relativetimesequence: "TIME_RELATIVE",

  /**
   * ECGObservationSequenceType
   */
  ECGObservationSequenceType: "_ECGObservationSequenceType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationSequenceTypeCode =
  typeof ObservationSequenceTypeCode[keyof typeof ObservationSequenceTypeCode];
