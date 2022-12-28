/**
 * Definition: A factor, such as a microorganism, chemical substance, or form of radiation, whose presence, excessive presence, or (in deficiency diseases) relative absence is essential, in whole or in part, for the occurrence of a condition.

Constraint: The use of this participation is limited to observations.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationCausativeAgent
 */
export const ParticipationCausativeAgentCode = {
  /**
   * causative agent
   */
  CAGNT: "CAGNT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationCausativeAgentCode =
  typeof ParticipationCausativeAgentCode[keyof typeof ParticipationCausativeAgentCode];
