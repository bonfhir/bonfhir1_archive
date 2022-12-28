/**
 * A code that describes the type of issue.
 * http://hl7.org/fhir/ValueSet/issue-type
 */
export const IssueTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IssueTypeCode = typeof IssueTypeCode[keyof typeof IssueTypeCode];
