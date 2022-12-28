/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-TimingDetectedIssueCode
 */
export const TimingDetectedIssueCodeCode = {
  /**
   * End Too Late Alert
   */
  ENDLATE: "ENDLATE",

  /**
   * Start Too Late Alert
   */
  STRTLATE: "STRTLATE",

  /**
   * timing detected issue
   */
  TIME: "TIME",

  /**
   * end too late alert
   */
  ALRTENDLATE: "ALRTENDLATE",

  /**
   * start too late alert
   */
  ALRTSTRTLATE: "ALRTSTRTLATE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TimingDetectedIssueCodeCode =
  typeof TimingDetectedIssueCodeCode[keyof typeof TimingDetectedIssueCodeCode];
