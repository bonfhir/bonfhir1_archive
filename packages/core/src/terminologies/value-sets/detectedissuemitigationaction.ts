/**
 * Kinds of mitigating actions and observations that can be associated with a detected issue or contraindication, such as 'added concurrent therapy', 'prior therapy documented', etc.
 * http://hl7.org/fhir/ValueSet/detectedissue-mitigation-action
 */
export const DetectedIssueMitigationActionCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DetectedIssueMitigationActionCode =
  typeof DetectedIssueMitigationActionCode[keyof typeof DetectedIssueMitigationActionCode];
