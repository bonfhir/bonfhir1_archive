/**
 * Codes used to define various metadata aspects of a health quality measure.
 * http://terminology.hl7.org/ValueSet/v3-ObservationQualityMeasureAttribute
 */
export const ObservationQualityMeasureAttributeCode = {
  /**
   * ObservationQualityMeasureAttribute
   */
  _ObservationQualityMeasureAttribute: "_ObservationQualityMeasureAttribute",

  /**
   * aggregate measure observation
   */
  AGGREGATE: "AGGREGATE",

  /**
   * composite measure method
   */
  CMPMSRMTH: "CMPMSRMTH",

  /**
   * component measure scoring weight
   */
  CMPMSRSCRWGHT: "CMPMSRSCRWGHT",

  /**
   * copyright
   */
  COPY: "COPY",

  /**
   * clinical recommendation statement
   */
  CRS: "CRS",

  /**
   * definition
   */
  DEF: "DEF",

  /**
   * disclaimer
   */
  DISC: "DISC",

  /**
   * finalized date/time
   */
  FINALDT: "FINALDT",

  /**
   * guidance
   */
  GUIDE: "GUIDE",

  /**
   * improvement notation
   */
  IDUR: "IDUR",

  /**
   * items counted
   */
  ITMCNT: "ITMCNT",

  /**
   * keyword
   */
  KEY: "KEY",

  /**
   * measurement end date
   */
  MEDT: "MEDT",

  /**
   * measurement start date
   */
  MSD: "MSD",

  /**
   * risk adjustment
   */
  MSRADJ: "MSRADJ",

  /**
   * rate aggregation
   */
  MSRAGG: "MSRAGG",

  /**
   * health quality measure improvement notation
   */
  MSRIMPROV: "MSRIMPROV",

  /**
   * jurisdiction
   */
  MSRJUR: "MSRJUR",

  /**
   * reporter type
   */
  MSRRPTR: "MSRRPTR",

  /**
   * timeframe for reporting
   */
  MSRRPTTIME: "MSRRPTTIME",

  /**
   * measure scoring
   */
  MSRSCORE: "MSRSCORE",

  /**
   * health quality measure care setting
   */
  MSRSET: "MSRSET",

  /**
   * health quality measure topic type
   */
  MSRTOPIC: "MSRTOPIC",

  /**
   * measurement period
   */
  MSRTP: "MSRTP",

  /**
   * measure type
   */
  MSRTYPE: "MSRTYPE",

  /**
   * rationale
   */
  RAT: "RAT",

  /**
   * reference
   */
  REF: "REF",

  /**
   * supplemental data elements
   */
  SDE: "SDE",

  /**
   * stratification
   */
  STRAT: "STRAT",

  /**
   * transmission format
   */
  TRANF: "TRANF",

  /**
   * notice of use
   */
  USE: "USE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationQualityMeasureAttributeCode =
  typeof ObservationQualityMeasureAttributeCode[keyof typeof ObservationQualityMeasureAttributeCode];
