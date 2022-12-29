/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActMoodDefEvnRqoPrmsPrp
 */
export const XActMoodDefEvnRqoPrmsPrpCode = {
  /**
   * definition
   */
  definition: "DEF",

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
export type XActMoodDefEvnRqoPrmsPrpCode =
  typeof XActMoodDefEvnRqoPrmsPrpCode[keyof typeof XActMoodDefEvnRqoPrmsPrpCode];
