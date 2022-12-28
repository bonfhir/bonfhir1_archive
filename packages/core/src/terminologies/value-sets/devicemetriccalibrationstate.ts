/**
 * Describes the state of a metric calibration.
 * http://hl7.org/fhir/ValueSet/metric-calibration-state
 */
export const DeviceMetricCalibrationStateCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DeviceMetricCalibrationStateCode =
  typeof DeviceMetricCalibrationStateCode[keyof typeof DeviceMetricCalibrationStateCode];
