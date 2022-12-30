/**
 * Observation values used to indicate what kind of health quality measure is used.
 * http://terminology.hl7.org/ValueSet/v3-ObservationMeasureType
 */
export const ObservationMeasureTypeCode = {
  /**
   * ObservationMeasureType
   */
  _ObservationMeasureType: "_ObservationMeasureType",

  /**
   * composite measure type
   */
  COMPOSITE: "COMPOSITE",

  /**
   * efficiency measure type
   */
  EFFICIENCY: "EFFICIENCY",

  /**
   * experience measure type
   */
  EXPERIENCE: "EXPERIENCE",

  /**
   * outcome measure type
   */
  OUTCOME: "OUTCOME",

  /**
   * intermediate clinical outcome measure
   */
  "INTERM-OM": "INTERM-OM",

  /**
   * patient reported outcome performance measure
   */
  "PRO-PM": "PRO-PM",

  /**
   * process measure type
   */
  PROCESS: "PROCESS",

  /**
   * appropriate use process measure
   */
  APPROPRIATE: "APPROPRIATE",

  /**
   * resource use measure type
   */
  RESOURCE: "RESOURCE",

  /**
   * structure measure type
   */
  STRUCTURE: "STRUCTURE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationMeasureTypeCode =
  typeof ObservationMeasureTypeCode[keyof typeof ObservationMeasureTypeCode];
