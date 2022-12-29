/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ObservationSeriesType
 */
export const ObservationSeriesTypeCode = {
  /**
   * ECGObservationSeriesType
   */
  ECGObservationSeriesType: "_ECGObservationSeriesType",

  /**
   * ECG representative beat waveforms
   */
  ECGrepresentativebeatwaveforms: "REPRESENTATIVE_BEAT",

  /**
   * ECG rhythm waveforms
   */
  ECGrhythmwaveforms: "RHYTHM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationSeriesTypeCode =
  typeof ObservationSeriesTypeCode[keyof typeof ObservationSeriesTypeCode];
