/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActAdministrativeRuleDetectedIssueCode
 */
export const ActAdministrativeRuleDetectedIssueCodeCode = {
  /**
   * ActAdministrativeRuleDetectedIssueCode
   */
  _ActAdministrativeRuleDetectedIssueCode:
    "_ActAdministrativeRuleDetectedIssueCode",

  /**
   * Unknown key identifier
   */
  KEY204: "KEY204",

  /**
   * Duplicate key identifier
   */
  KEY205: "KEY205",

  /**
   * non-matching identification
   */
  KEY206: "KEY206",

  /**
   * obsolete record returned
   */
  OBSOLETE: "OBSOLETE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAdministrativeRuleDetectedIssueCodeCode =
  typeof ActAdministrativeRuleDetectedIssueCodeCode[keyof typeof ActAdministrativeRuleDetectedIssueCodeCode];
