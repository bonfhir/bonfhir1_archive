/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActMoodDefEvnRqo
 */
export const XActMoodDefEvnRqoCode = {
  /**
   * definition
   */
  DEF: "DEF",

  /**
   * event (occurrence)
   */
  EVN: "EVN",

  /**
   * request
   */
  RQO: "RQO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActMoodDefEvnRqoCode =
  typeof XActMoodDefEvnRqoCode[keyof typeof XActMoodDefEvnRqoCode];
