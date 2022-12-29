/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipContainsStartOf
 */
export const ActRelationshipContainsStartOfCode = {
  /**
   * contains start of
   */
  containsstartof: "SBSEAS",

  /**
   * starts before start of, ends with
   */
  startsbeforestartofendswith: "SBSECWE",

  /**
   * contains start of, ends before end of
   */
  containsstartofendsbeforeendof: "SBSEASEBE",

  /**
   * contains time of
   */
  containstimeof: "SBSEAE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipContainsStartOfCode =
  typeof ActRelationshipContainsStartOfCode[keyof typeof ActRelationshipContainsStartOfCode];
