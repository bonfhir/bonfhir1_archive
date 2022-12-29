/**
 * A non-mandated intent to perform an act. Used to record intents that are explicitly not Orders. Professional responsibility for the 'proposal' may or may not be present.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodProposal
 */
export const ActMoodProposalCode = {
  /**
   * proposal
   */
  proposal: "PRP",

  /**
   * recommendation
   */
  recommendation: "RMD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodProposalCode =
  typeof ActMoodProposalCode[keyof typeof ActMoodProposalCode];
