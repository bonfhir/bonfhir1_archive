/**
 * The role that the assertion variable plays.
 * http://hl7.org/fhir/ValueSet/variable-role
 */
export const EvidenceVariableRoleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EvidenceVariableRoleCode =
  typeof EvidenceVariableRoleCode[keyof typeof EvidenceVariableRoleCode];
