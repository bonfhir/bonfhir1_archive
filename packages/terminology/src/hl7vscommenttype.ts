/**
 * Value Set of codes that identify the type of comment text being sent in the specific comment record.
 * http://terminology.hl7.org/ValueSet/v2-0364
 */
export const Hl7VSCommentTypeCode = {
  /**
   * Patient Instructions
   */
  PatientInstructions: "PI",

  /**
   * Ancillary Instructions
   */
  AncillaryInstructions: "AI",

  /**
   * General Instructions
   */
  GeneralInstructions: "GI",

  /**
   * Primary Reason
   */
  PrimaryReason: "1R",

  /**
   * Secondary Reason
   */
  SecondaryReason: "2R",

  /**
   * General Reason
   */
  GeneralReason: "GR",

  /**
   * Remark
   */
  Remark: "RE",

  /**
   * Duplicate/Interaction Reason
   */
  DuplicateInteractionReason: "DR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCommentTypeCode =
  typeof Hl7VSCommentTypeCode[keyof typeof Hl7VSCommentTypeCode];
