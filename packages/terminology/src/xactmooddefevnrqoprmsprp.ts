/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActMoodDefEvnRqoPrmsPrp
 */
export const XActMoodDefEvnRqoPrmsPrpCode = {
  /**
   * definition
   */
  DEF: "DEF",

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
export type XActMoodDefEvnRqoPrmsPrpCode =
  typeof XActMoodDefEvnRqoPrmsPrpCode[keyof typeof XActMoodDefEvnRqoPrmsPrpCode];
