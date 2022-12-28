/**
 * Container for Correlated Observation Sequences sharing a common frame of reference. All Observations of the same cd must be comparable and relative to the common frame of reference. For example, a 3-channel ECG device records a 12-lead ECG in 4 steps (3 leads at a time). Each of the separate 3-channel recordings would be in their own "OBSCOR". And, all 4 OBSCOR would be contained in one OBSSER because all the times are relative to the same origin (beginning of the recording) and all the ECG signals were from a fixed set of electrodes.
 * http://terminology.hl7.org/ValueSet/v3-ActClassObservationSeries
 */
export const ActClassObservationSeriesCode = {
  /**
   * observation series
   */
  OBSSER: "OBSSER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassObservationSeriesCode =
  typeof ActClassObservationSeriesCode[keyof typeof ActClassObservationSeriesCode];
