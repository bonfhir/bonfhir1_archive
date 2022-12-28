/**
 * Indicates the progression of a study subject through the study milestones.
 * http://terminology.hl7.org/ValueSet/research-subject-milestone
 */
export const ResearchSubjectMilestoneCode = {
  /**
   * Signed up
   */
  SignedUp: "SignedUp",

  /**
   * Screened
   */
  Screened: "Screened",

  /**
   * Randomized
   */
  Randomized: "Randomized",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchSubjectMilestoneCode =
  typeof ResearchSubjectMilestoneCode[keyof typeof ResearchSubjectMilestoneCode];
