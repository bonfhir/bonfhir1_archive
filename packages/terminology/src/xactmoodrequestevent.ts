/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActMoodRequestEvent
 */
export const XActMoodRequestEventCode = {
  /**
   * event (occurrence)
   */
  eventoccurrence: "EVN",

  /**
   * request
   */
  request: "RQO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActMoodRequestEventCode =
  typeof XActMoodRequestEventCode[keyof typeof XActMoodRequestEventCode];
