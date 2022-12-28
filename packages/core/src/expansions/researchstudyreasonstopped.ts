/**
 * Codes for why the study ended prematurely.
 * http://terminology.hl7.org/ValueSet/research-study-reason-stopped
 */
export const ResearchStudyReasonStoppedCode = {
  /**
   * Accrual Goal Met
   */
  "accrual-goal-met": "accrual-goal-met",

  /**
   * Closed due to toxicity
   */
  "closed-due-to-toxicity": "closed-due-to-toxicity",

  /**
   * Closed due to lack of study progress
   */
  "closed-due-to-lack-of-study-progress":
    "closed-due-to-lack-of-study-progress",

  /**
   * Temporarily closed per study design
   */
  "temporarily-closed-per-study-design": "temporarily-closed-per-study-design",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchStudyReasonStoppedCode =
  typeof ResearchStudyReasonStoppedCode[keyof typeof ResearchStudyReasonStoppedCode];
