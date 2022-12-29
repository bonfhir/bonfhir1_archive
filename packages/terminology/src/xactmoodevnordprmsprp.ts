/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActMoodEvnOrdPrmsPrp
 */
export const XActMoodEvnOrdPrmsPrpCode = {
  /**
   * event (occurrence)
   */
  eventoccurrence: "EVN",

  /**
   * promise
   */
  promise: "PRMS",

  /**
   * proposal
   */
  proposal: "PRP",

  /**
   * request
   */
  request: "RQO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActMoodEvnOrdPrmsPrpCode =
  typeof XActMoodEvnOrdPrmsPrpCode[keyof typeof XActMoodEvnOrdPrmsPrpCode];
