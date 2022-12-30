/**
 * An observation identifying a potential adverse outcome as a result of an Act or combination of Acts.

*Examples:* Detection of a drug-drug interaction; Identification of a late-submission for an invoice; Requesting discharge for a patient who does not meet hospital-defined discharge criteria.

*Discussion:* This class is commonly used for identifying 'business rule' or 'process' problems that may result in a refusal to carry out a particular request. In some circumstances it may be possible to 'bypass' a problem by modifying the request to acknowledge the issue and/or by providing some form of mitigation.

*Constraints:* the Act or Acts that may cause the the adverse outcome are the target of a subject ActRelationship. The subbtypes of this concept indicate the type of problem being detected (e.g. drug-drug interaction) while the Observation.value is used to repesent a specific problem code (e.g. specific drug-drug interaction id).
 * http://terminology.hl7.org/ValueSet/v3-ActClassDetectedIssue
 */
export const ActClassDetectedIssueCode = {
  /**
   * detected issue
   */
  ALRT: "ALRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassDetectedIssueCode =
  typeof ActClassDetectedIssueCode[keyof typeof ActClassDetectedIssueCode];
