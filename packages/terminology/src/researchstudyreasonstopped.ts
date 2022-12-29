/**
 * Codes for why the study ended prematurely.
 * http://terminology.hl7.org/ValueSet/research-study-reason-stopped
 */
export const ResearchStudyReasonStoppedCode = {
  /**
   * Accrual Goal Met
   */
  AccrualGoalMet: "accrual-goal-met",

  /**
   * Closed due to toxicity
   */
  Closedduetotoxicity: "closed-due-to-toxicity",

  /**
   * Closed due to lack of study progress
   */
  Closedduetolackofstudyprogress: "closed-due-to-lack-of-study-progress",

  /**
   * Temporarily closed per study design
   */
  Temporarilyclosedperstudydesign: "temporarily-closed-per-study-design",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchStudyReasonStoppedCode =
  typeof ResearchStudyReasonStoppedCode[keyof typeof ResearchStudyReasonStoppedCode];
