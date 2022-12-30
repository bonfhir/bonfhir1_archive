/**
 * Interpretations of anti-microbial susceptibility testing results (microbiology). At most one allowed.
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationSusceptibility
 */
export const ObservationInterpretationSusceptibilityCode = {
  /**
   * Insufficient evidence
   */
  IE: "IE",

  /**
   * Intermediate
   */
  I: "I",

  /**
   * moderately susceptible
   */
  MS: "MS",

  /**
   * No CLSI defined breakpoint
   */
  NCL: "NCL",

  /**
   * Non-susceptible
   */
  NS: "NS",

  /**
   * Resistant
   */
  R: "R",

  /**
   * Synergy - resistant
   */
  "SYN-R": "SYN-R",

  /**
   * Susceptible
   */
  S: "S",

  /**
   * Susceptible-dose dependent
   */
  SDD: "SDD",

  /**
   * Synergy - susceptible
   */
  "SYN-S": "SYN-S",

  /**
   * very susceptible
   */
  VS: "VS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationSusceptibilityCode =
  typeof ObservationInterpretationSusceptibilityCode[keyof typeof ObservationInterpretationSusceptibilityCode];
