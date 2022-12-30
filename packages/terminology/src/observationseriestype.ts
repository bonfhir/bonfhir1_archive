/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ObservationSeriesType
 */
export const ObservationSeriesTypeCode = {
  /**
   * ECGObservationSeriesType
   */
  _ECGObservationSeriesType: "_ECGObservationSeriesType",

  /**
   * ECG representative beat waveforms
   */
  REPRESENTATIVE_BEAT: "REPRESENTATIVE_BEAT",

  /**
   * ECG rhythm waveforms
   */
  RHYTHM: "RHYTHM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationSeriesTypeCode =
  typeof ObservationSeriesTypeCode[keyof typeof ObservationSeriesTypeCode];
