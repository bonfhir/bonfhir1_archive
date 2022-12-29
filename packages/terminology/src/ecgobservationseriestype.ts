/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ECGObservationSeriesType
 */
export const ECGObservationSeriesTypeCode = {
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
export type ECGObservationSeriesTypeCode =
  typeof ECGObservationSeriesTypeCode[keyof typeof ECGObservationSeriesTypeCode];
