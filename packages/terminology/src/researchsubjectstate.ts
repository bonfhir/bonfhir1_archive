/**
 * Indicates the progression of a study subject through a study.
 * http://terminology.hl7.org/ValueSet/research-subject-state
 */
export const ResearchSubjectStateCode = {
  /**
   * Candidate
   */
  Candidate: "candidate",

  /**
   * Eligible
   */
  Eligible: "eligible",

  /**
   * Follow-up
   */
  Followup: "follow-up",

  /**
   * Ineligible
   */
  Ineligible: "ineligible",

  /**
   * Not Registered
   */
  NotRegistered: "not-registered",

  /**
   * Off-study
   */
  Offstudy: "off-study",

  /**
   * On-study
   */
  Onstudy: "on-study",

  /**
   * On-study-intervention
   */
  Onstudyintervention: "on-study-intervention",

  /**
   * On-study-observation
   */
  Onstudyobservation: "on-study-observation",

  /**
   * Pending on-study
   */
  Pendingonstudy: "pending-on-study",

  /**
   * Potential Candidate
   */
  PotentialCandidate: "potential-candidate",

  /**
   * Screening
   */
  Screening: "screening",

  /**
   * Withdrawn
   */
  Withdrawn: "withdrawn",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchSubjectStateCode =
  typeof ResearchSubjectStateCode[keyof typeof ResearchSubjectStateCode];
