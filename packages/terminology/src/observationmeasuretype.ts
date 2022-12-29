/**
 * Observation values used to indicate what kind of health quality measure is used.
 * http://terminology.hl7.org/ValueSet/v3-ObservationMeasureType
 */
export const ObservationMeasureTypeCode = {
  /**
   * ObservationMeasureType
   */
  ObservationMeasureType: "_ObservationMeasureType",

  /**
   * composite measure type
   */
  compositemeasuretype: "COMPOSITE",

  /**
   * efficiency measure type
   */
  efficiencymeasuretype: "EFFICIENCY",

  /**
   * experience measure type
   */
  experiencemeasuretype: "EXPERIENCE",

  /**
   * outcome measure type
   */
  outcomemeasuretype: "OUTCOME",

  /**
   * intermediate clinical outcome measure
   */
  intermediateclinicaloutcomemeasure: "INTERM-OM",

  /**
   * patient reported outcome performance measure
   */
  patientreportedoutcomeperformancemeasure: "PRO-PM",

  /**
   * process measure type
   */
  processmeasuretype: "PROCESS",

  /**
   * appropriate use process measure
   */
  appropriateuseprocessmeasure: "APPROPRIATE",

  /**
   * resource use measure type
   */
  resourceusemeasuretype: "RESOURCE",

  /**
   * structure measure type
   */
  structuremeasuretype: "STRUCTURE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationMeasureTypeCode =
  typeof ObservationMeasureTypeCode[keyof typeof ObservationMeasureTypeCode];
