/**
 * **Description:** 

An acquisition exposure act describes the proximity (location and time) through which the participating entity was potentially exposed to a physical (including energy), chemical or biological agent from another entity. The acquisition exposure act is used in conjunction with transmission exposure acts as part of an analysis technique for contact tracing. Although an exposure can be decomposed into transmission and acquisition exposures, there is no requirement that all exposures be treated in this fashion.

**Constraints:** The Acquisition Exposure inherits the participation constraints that apply to Exposure with the following exception. The EXPSRC (exposure source) participation must never be associated with the Transmission Exposure either directly or via context conduction.
 * http://terminology.hl7.org/ValueSet/v3-ActClassAcquisitionExposure
 */
export const ActClassAcquisitionExposureCode = {
  /**
   * acquisition exposure
   */
  acquisitionexposure: "AEXPOS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassAcquisitionExposureCode =
  typeof ActClassAcquisitionExposureCode[keyof typeof ActClassAcquisitionExposureCode];
