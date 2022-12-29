/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActAdministrativeRuleDetectedIssueCode
 */
export const ActAdministrativeRuleDetectedIssueCodeCode = {
  /**
   * ActAdministrativeRuleDetectedIssueCode
   */
  ActAdministrativeRuleDetectedIssueCode:
    "_ActAdministrativeRuleDetectedIssueCode",

  /**
   * Unknown key identifier
   */
  Unknownkeyidentifier: "KEY204",

  /**
   * Duplicate key identifier
   */
  Duplicatekeyidentifier: "KEY205",

  /**
   * non-matching identification
   */
  nonmatchingidentification: "KEY206",

  /**
   * obsolete record returned
   */
  obsoleterecordreturned: "OBSOLETE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAdministrativeRuleDetectedIssueCodeCode =
  typeof ActAdministrativeRuleDetectedIssueCodeCode[keyof typeof ActAdministrativeRuleDetectedIssueCodeCode];
