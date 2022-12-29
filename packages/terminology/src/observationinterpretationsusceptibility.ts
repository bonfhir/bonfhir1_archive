/**
 * Interpretations of anti-microbial susceptibility testing results (microbiology). At most one allowed.
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationSusceptibility
 */
export const ObservationInterpretationSusceptibilityCode = {
  /**
   * Insufficient evidence
   */
  Insufficientevidence: "IE",

  /**
   * Intermediate
   */
  Intermediate: "I",

  /**
   * moderately susceptible
   */
  moderatelysusceptible: "MS",

  /**
   * No CLSI defined breakpoint
   */
  NoCLSIdefinedbreakpoint: "NCL",

  /**
   * Non-susceptible
   */
  Nonsusceptible: "NS",

  /**
   * Resistant
   */
  Resistant: "R",

  /**
   * Synergy - resistant
   */
  Synergyresistant: "SYN-R",

  /**
   * Susceptible
   */
  Susceptible: "S",

  /**
   * Susceptible-dose dependent
   */
  Susceptibledosedependent: "SDD",

  /**
   * Synergy - susceptible
   */
  Synergysusceptible: "SYN-S",

  /**
   * very susceptible
   */
  verysusceptible: "VS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationSusceptibilityCode =
  typeof ObservationInterpretationSusceptibilityCode[keyof typeof ObservationInterpretationSusceptibilityCode];
