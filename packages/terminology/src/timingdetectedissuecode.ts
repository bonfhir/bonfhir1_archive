/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-TimingDetectedIssueCode
 */
export const TimingDetectedIssueCodeCode = {
  /**
   * End Too Late Alert
   */
  EndTooLateAlert: "ENDLATE",

  /**
   * Start Too Late Alert
   */
  StartTooLateAlert: "STRTLATE",

  /**
   * timing detected issue
   */
  timingdetectedissue: "TIME",

  /**
   * end too late alert
   */
  endtoolatealert: "ALRTENDLATE",

  /**
   * start too late alert
   */
  starttoolatealert: "ALRTSTRTLATE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TimingDetectedIssueCodeCode =
  typeof TimingDetectedIssueCodeCode[keyof typeof TimingDetectedIssueCodeCode];
