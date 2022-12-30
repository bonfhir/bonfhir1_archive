/**
 * **Description:**Indicates how result sets should be filtered based on whether they have associated issues.
 * http://terminology.hl7.org/ValueSet/v3-IssueFilterCode
 */
export const IssueFilterCodeCode = {
  /**
   * QueryParameterValue
   */
  _QueryParameterValue: "_QueryParameterValue",

  /**
   * all
   */
  ISSFA: "ISSFA",

  /**
   * with issues
   */
  ISSFI: "ISSFI",

  /**
   * with unmanaged issues
   */
  ISSFU: "ISSFU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IssueFilterCodeCode =
  typeof IssueFilterCodeCode[keyof typeof IssueFilterCodeCode];
