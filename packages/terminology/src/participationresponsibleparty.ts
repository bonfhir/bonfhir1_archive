/**
 * The person or organization that has primary responsibility for the act. The responsible party is not necessarily present in an action, but is accountable for the action through the power to delegate, and the duty to review actions with the performing actor after the fact. This responsibility may be ethical, legal, contractual, fiscal, or fiduciary in nature.

*Example:* A person who is the head of a biochemical laboratory; a sponsor for a policy or government program.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationResponsibleParty
 */
export const ParticipationResponsiblePartyCode = {
  /**
   * responsible party
   */
  responsibleparty: "RESP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationResponsiblePartyCode =
  typeof ParticipationResponsiblePartyCode[keyof typeof ParticipationResponsiblePartyCode];
