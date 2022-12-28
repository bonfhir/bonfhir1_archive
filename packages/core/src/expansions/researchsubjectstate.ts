/**
 * Indicates the progression of a study subject through a study.
 * http://terminology.hl7.org/ValueSet/research-subject-state
 */
export const ResearchSubjectStateCode = {
  /**
   * Candidate
   */
  candidate: "candidate",

  /**
   * Eligible
   */
  eligible: "eligible",

  /**
   * Follow-up
   */
  "follow-up": "follow-up",

  /**
   * Ineligible
   */
  ineligible: "ineligible",

  /**
   * Not Registered
   */
  "not-registered": "not-registered",

  /**
   * Off-study
   */
  "off-study": "off-study",

  /**
   * On-study
   */
  "on-study": "on-study",

  /**
   * On-study-intervention
   */
  "on-study-intervention": "on-study-intervention",

  /**
   * On-study-observation
   */
  "on-study-observation": "on-study-observation",

  /**
   * Pending on-study
   */
  "pending-on-study": "pending-on-study",

  /**
   * Potential Candidate
   */
  "potential-candidate": "potential-candidate",

  /**
   * Screening
   */
  screening: "screening",

  /**
   * Withdrawn
   */
  withdrawn: "withdrawn",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchSubjectStateCode =
  typeof ResearchSubjectStateCode[keyof typeof ResearchSubjectStateCode];
