/**
 * Codes used to define various metadata aspects of a health quality measure.
 * http://terminology.hl7.org/ValueSet/v3-ObservationQualityMeasureAttribute
 */
export const ObservationQualityMeasureAttributeCode = {
  /**
   * ObservationQualityMeasureAttribute
   */
  ObservationQualityMeasureAttribute: "_ObservationQualityMeasureAttribute",

  /**
   * aggregate measure observation
   */
  aggregatemeasureobservation: "AGGREGATE",

  /**
   * composite measure method
   */
  compositemeasuremethod: "CMPMSRMTH",

  /**
   * component measure scoring weight
   */
  componentmeasurescoringweight: "CMPMSRSCRWGHT",

  /**
   * copyright
   */
  copyright: "COPY",

  /**
   * clinical recommendation statement
   */
  clinicalrecommendationstatement: "CRS",

  /**
   * definition
   */
  definition: "DEF",

  /**
   * disclaimer
   */
  disclaimer: "DISC",

  /**
   * finalized date/time
   */
  finalizeddatetime: "FINALDT",

  /**
   * guidance
   */
  guidance: "GUIDE",

  /**
   * improvement notation
   */
  improvementnotation: "IDUR",

  /**
   * items counted
   */
  itemscounted: "ITMCNT",

  /**
   * keyword
   */
  keyword: "KEY",

  /**
   * measurement end date
   */
  measurementenddate: "MEDT",

  /**
   * measurement start date
   */
  measurementstartdate: "MSD",

  /**
   * risk adjustment
   */
  riskadjustment: "MSRADJ",

  /**
   * rate aggregation
   */
  rateaggregation: "MSRAGG",

  /**
   * health quality measure improvement notation
   */
  healthqualitymeasureimprovementnotation: "MSRIMPROV",

  /**
   * jurisdiction
   */
  jurisdiction: "MSRJUR",

  /**
   * reporter type
   */
  reportertype: "MSRRPTR",

  /**
   * timeframe for reporting
   */
  timeframeforreporting: "MSRRPTTIME",

  /**
   * measure scoring
   */
  measurescoring: "MSRSCORE",

  /**
   * health quality measure care setting
   */
  healthqualitymeasurecaresetting: "MSRSET",

  /**
   * health quality measure topic type
   */
  healthqualitymeasuretopictype: "MSRTOPIC",

  /**
   * measurement period
   */
  measurementperiod: "MSRTP",

  /**
   * measure type
   */
  measuretype: "MSRTYPE",

  /**
   * rationale
   */
  rationale: "RAT",

  /**
   * reference
   */
  reference: "REF",

  /**
   * supplemental data elements
   */
  supplementaldataelements: "SDE",

  /**
   * stratification
   */
  stratification: "STRAT",

  /**
   * transmission format
   */
  transmissionformat: "TRANF",

  /**
   * notice of use
   */
  noticeofuse: "USE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationQualityMeasureAttributeCode =
  typeof ObservationQualityMeasureAttributeCode[keyof typeof ObservationQualityMeasureAttributeCode];
