/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActMoodEvnOrdPrmsPrp
 */
export const XActMoodEvnOrdPrmsPrpCode = {
  /**
   * event (occurrence)
   */
  EVN: "EVN",

  /**
   * promise
   */
  PRMS: "PRMS",

  /**
   * proposal
   */
  PRP: "PRP",

  /**
   * request
   */
  RQO: "RQO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActMoodEvnOrdPrmsPrpCode =
  typeof XActMoodEvnOrdPrmsPrpCode[keyof typeof XActMoodEvnOrdPrmsPrpCode];
