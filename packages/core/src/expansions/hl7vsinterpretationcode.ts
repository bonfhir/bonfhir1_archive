/**
 * A categorical assessment, providing a rough qualitative interpretation of the observation value, such as “normal”/ “abnormal”,”low” / “high”, “better” / “worse”, “susceptible” / “resistant”, “expected”/ “not expected”. The value set is intended to be for ANY use where coded representation of an interpretation is needed.   Notes: This is being communicated in v2.x in OBX-8, in v3 in ObservationInterpretation (CWE) in R1 (Representative Realm) and in FHIR Observation.interpretation. Historically these values come from the laboratory domain, and these codes are extensively used. The value set binding is extensible, so codes outside the value set that are needed for interpretation concepts  (i.e. particular meanings) that are not included in the value set can be used, and these new codes may also be added to the value set and published in a future version.
 * http://terminology.hl7.org/ValueSet/v2-0078
 */
export const Hl7VSInterpretationCodeCode = {
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
export type Hl7VSInterpretationCodeCode =
  typeof Hl7VSInterpretationCodeCode[keyof typeof Hl7VSInterpretationCodeCode];
