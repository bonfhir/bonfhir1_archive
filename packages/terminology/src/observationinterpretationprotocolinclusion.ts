/**
 * The observation/test result is interpreted as being outside the inclusion range for a particular protocol within which the result is being reported.

**Example:** A positive result on a Hepatitis screening test.

*Open Issue:* We are not deprecating this value set at this time, but instead are leaving open the consideration of deprecation in the future. \[Note: The concepts included in this value set have also been suggested for future deprecation, and there are no associated concept subdomains or bindings.\]
 * http://terminology.hl7.org/ValueSet/v3-ObservationInterpretationProtocolInclusion
 */
export const ObservationInterpretationProtocolInclusionCode = {
  /**
   * outside threshold
   */
  EX: "EX",

  /**
   * above high threshold
   */
  HX: "HX",

  /**
   * below low threshold
   */
  LX: "LX",

  /**
   * GeneticObservationInterpretation
   */
  _GeneticObservationInterpretation: "_GeneticObservationInterpretation",

  /**
   * Carrier
   */
  CAR: "CAR",

  /**
   * Carrier
   */
  Carrier: "Carrier",

  /**
   * ObservationInterpretationChange
   */
  _ObservationInterpretationChange: "_ObservationInterpretationChange",

  /**
   * Better
   */
  B: "B",

  /**
   * Significant change down
   */
  D: "D",

  /**
   * Significant change up
   */
  U: "U",

  /**
   * Worse
   */
  W: "W",

  /**
   * ObservationInterpretationExceptions
   */
  _ObservationInterpretationExceptions: "_ObservationInterpretationExceptions",

  /**
   * Off scale low
   */
  "<": "<",

  /**
   * Off scale high
   */
  ">": ">",

  /**
   * Anti-complementary substances present
   */
  AC: "AC",

  /**
   * Insufficient evidence
   */
  IE: "IE",

  /**
   * Quality control failure
   */
  QCF: "QCF",

  /**
   * Cytotoxic substance present
   */
  TOX: "TOX",

  /**
   * ObservationInterpretationNormality
   */
  _ObservationInterpretationNormality: "_ObservationInterpretationNormality",

  /**
   * Abnormal
   */
  A: "A",

  /**
   * Critical abnormal
   */
  AA: "AA",

  /**
   * Critical high
   */
  HH: "HH",

  /**
   * Critical low
   */
  LL: "LL",

  /**
   * High
   */
  H: "H",

  /**
   * Significantly high
   */
  "H>": "H>",

  /**
   * Significantly high
   */
  HU: "HU",

  /**
   * Low
   */
  L: "L",

  /**
   * Significantly low
   */
  "L<": "L<",

  /**
   * Significantly low
   */
  LU: "LU",

  /**
   * Normal
   */
  N: "N",

  /**
   * ObservationInterpretationSusceptibility
   */
  _ObservationInterpretationSusceptibility:
    "_ObservationInterpretationSusceptibility",

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

  /**
   * Hold for Medical Review
   */
  HM: "HM",

  /**
   * ObservationInterpretationDetection
   */
  ObservationInterpretationDetection: "ObservationInterpretationDetection",

  /**
   * Indeterminate
   */
  IND: "IND",

  /**
   * Equivocal
   */
  E: "E",

  /**
   * Negative
   */
  NEG: "NEG",

  /**
   * Not detected
   */
  ND: "ND",

  /**
   * Positive
   */
  POS: "POS",

  /**
   * Detected
   */
  DET: "DET",

  /**
   * ObservationInterpretationExpectation
   */
  ObservationInterpretationExpectation: "ObservationInterpretationExpectation",

  /**
   * Expected
   */
  EXP: "EXP",

  /**
   * Unexpected
   */
  UNE: "UNE",

  /**
   * Interpretation qualifiers in separate OBX segments
   */
  OBX: "OBX",

  /**
   * ReactivityObservationInterpretation
   */
  ReactivityObservationInterpretation: "ReactivityObservationInterpretation",

  /**
   * Non-reactive
   */
  NR: "NR",

  /**
   * Reactive
   */
  RR: "RR",

  /**
   * Weakly reactive
   */
  WR: "WR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationInterpretationProtocolInclusionCode =
  typeof ObservationInterpretationProtocolInclusionCode[keyof typeof ObservationInterpretationProtocolInclusionCode];
