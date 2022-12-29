/**
 * **Description:** 

A transmission exposure act describes the proximity (time and location) over which the participating source entity was capable of transmitting a physical (including energy), chemical or biological substance agent to another entity. The transmission exposure act is used in conjunction with acquisition exposure acts as part of an analysis technique for contact tracing. Although an exposure can be decomposed into transmission and acquisition exposures, there is no requirement that all exposures be treated in this fashion.

**Constraints:** The Transmission Exposure inherits the participation constraints that apply to Exposure with the following exception. The EXPTRGT (exposure target) participation must never be associated with the Transmission Exposure either directly or via context conduction.
 * http://terminology.hl7.org/ValueSet/v3-ActClassTransmissionExposure
 */
export const ActClassTransmissionExposureCode = {
  /**
   * transmission exposure
   */
  transmissionexposure: "TEXPOS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassTransmissionExposureCode =
  typeof ActClassTransmissionExposureCode[keyof typeof ActClassTransmissionExposureCode];
