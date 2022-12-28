/**
 * Value Set of codes that identify the type of comment text being sent in the specific comment record.
 * http://terminology.hl7.org/ValueSet/v2-0364
 */
export const Hl7VSCommentTypeCode = {
  /**
   * Patient Instructions
   */
  PI: "PI",

  /**
   * Ancillary Instructions
   */
  AI: "AI",

  /**
   * General Instructions
   */
  GI: "GI",

  /**
   * Primary Reason
   */
  "1R": "1R",

  /**
   * Secondary Reason
   */
  "2R": "2R",

  /**
   * General Reason
   */
  GR: "GR",

  /**
   * Remark
   */
  RE: "RE",

  /**
   * Duplicate/Interaction Reason
   */
  DR: "DR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCommentTypeCode =
  typeof Hl7VSCommentTypeCode[keyof typeof Hl7VSCommentTypeCode];
