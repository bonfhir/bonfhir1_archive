/**
 * This value set defines a set of codes that can be used to express the role of a diagnosis on the Encounter or EpisodeOfCare record.
 * http://hl7.org/fhir/ValueSet/diagnosis-role
 */
export const DiagnosisRoleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DiagnosisRoleCode =
  typeof DiagnosisRoleCode[keyof typeof DiagnosisRoleCode];
