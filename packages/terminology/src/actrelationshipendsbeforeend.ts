/**
 * The source Act ends after the end of the target Act (i.e. if we say "ActOne EBE ActTwo", it means that ActOne ends before the end of ActTwo, therefore ActOne is the source and ActTwo is the target).
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsBeforeEnd
 */
export const ActRelationshipEndsBeforeEndCode = {
  /**
   * ends before end of
   */
  EBE: "EBE",

  /**
   * starts before start of, ends before end of
   */
  SBSEBE: "SBSEBE",

  /**
   * contains start of, ends before end of
   */
  SBSEASEBE: "SBSEASEBE",

  /**
   * ends before or concurrent with start of
   */
  EBSORECWS: "EBSORECWS",

  /**
   * ends concurrent with start of
   */
  ECWS: "ECWS",

  /**
   * ends before start of
   */
  EBS: "EBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEndsBeforeEndCode =
  typeof ActRelationshipEndsBeforeEndCode[keyof typeof ActRelationshipEndsBeforeEndCode];
