/**
 * Codes for the stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
 * http://terminology.hl7.org/ValueSet/research-study-phase
 */
export const ResearchStudyPhaseCode = {
  /**
   * N/A
   */
  NA: "n-a",

  /**
   * Early Phase 1
   */
  EarlyPhase1: "early-phase-1",

  /**
   * Phase 1
   */
  Phase1: "phase-1",

  /**
   * Phase 1/Phase 2
   */
  Phase1Phase2: "phase-1-phase-2",

  /**
   * Phase 2
   */
  Phase2: "phase-2",

  /**
   * Phase 2/Phase 3
   */
  Phase2Phase3: "phase-2-phase-3",

  /**
   * Phase 3
   */
  Phase3: "phase-3",

  /**
   * Phase 4
   */
  Phase4: "phase-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResearchStudyPhaseCode =
  typeof ResearchStudyPhaseCode[keyof typeof ResearchStudyPhaseCode];
