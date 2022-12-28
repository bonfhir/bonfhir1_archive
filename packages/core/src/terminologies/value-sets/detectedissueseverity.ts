/**
 * Indicates the potential degree of impact of the identified issue on the patient.
 * http://hl7.org/fhir/ValueSet/detectedissue-severity
 */
export const DetectedIssueSeverityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DetectedIssueSeverityCode =
  typeof DetectedIssueSeverityCode[keyof typeof DetectedIssueSeverityCode];
