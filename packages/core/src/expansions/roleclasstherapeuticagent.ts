/**
 * A manufactured material (player) that is used for its therapeutic properties. The manufacturer is the scoper.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassTherapeuticAgent
 */
export const RoleClassTherapeuticAgentCode = {
  /**
   * therapeutic agent
   */
  THER: "THER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassTherapeuticAgentCode =
  typeof RoleClassTherapeuticAgentCode[keyof typeof RoleClassTherapeuticAgentCode];
