/**
 * How the issue affects the success of the action.
 * http://hl7.org/fhir/ValueSet/issue-severity
 */
export const IssueSeverityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IssueSeverityCode =
  typeof IssueSeverityCode[keyof typeof IssueSeverityCode];
