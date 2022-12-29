/**
 * An observation that reports the volume of a sample.
 * http://terminology.hl7.org/ValueSet/v3-ActSpecObsVolumeCode
 */
export const ActSpecObsVolumeCodeCode = {
  /**
   * ActSpecObsVolumeCode
   */
  ActSpecObsVolumeCode: "VOLUME",

  /**
   * Available Volume
   */
  AvailableVolume: "AVAILABLE",

  /**
   * Consumption Volume
   */
  ConsumptionVolume: "CONSUMPTION",

  /**
   * Current Volume
   */
  CurrentVolume: "CURRENT",

  /**
   * Initial Volume
   */
  InitialVolume: "INITIAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActSpecObsVolumeCodeCode =
  typeof ActSpecObsVolumeCodeCode[keyof typeof ActSpecObsVolumeCodeCode];
