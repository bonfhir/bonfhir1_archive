/**
 * Describes the type of a metric calibration.
 * http://hl7.org/fhir/ValueSet/metric-calibration-type
 */
export const DeviceMetricCalibrationTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DeviceMetricCalibrationTypeCode =
  typeof DeviceMetricCalibrationTypeCode[keyof typeof DeviceMetricCalibrationTypeCode];
