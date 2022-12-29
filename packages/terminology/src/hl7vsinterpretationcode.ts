/**
 * A categorical assessment, providing a rough qualitative interpretation of the observation value, such as “normal”/ “abnormal”,”low” / “high”, “better” / “worse”, “susceptible” / “resistant”, “expected”/ “not expected”. The value set is intended to be for ANY use where coded representation of an interpretation is needed.   Notes: This is being communicated in v2.x in OBX-8, in v3 in ObservationInterpretation (CWE) in R1 (Representative Realm) and in FHIR Observation.interpretation. Historically these values come from the laboratory domain, and these codes are extensively used. The value set binding is extensible, so codes outside the value set that are needed for interpretation concepts  (i.e. particular meanings) that are not included in the value set can be used, and these new codes may also be added to the value set and published in a future version.
 * http://terminology.hl7.org/ValueSet/v2-0078
 */
export const Hl7VSInterpretationCodeCode = {
  /**
   * GeneticObservationInterpretation
   */
  GeneticObservationInterpretation: "_GeneticObservationInterpretation",

  /**
   * Carrier
   */
  Carrier: "CAR",

  /**
   * Carrier
   */
  Carrier: "Carrier",

  /**
   * ObservationInterpretationChange
   */
  ObservationInterpretationChange: "_ObservationInterpretationChange",

  /**
   * Better
   */
  Better: "B",

  /**
   * Significant change down
   */
  Significantchangedown: "D",

  /**
   * Significant change up
   */
  Significantchangeup: "U",

  /**
   * Worse
   */
  Worse: "W",

  /**
   * ObservationInterpretationExceptions
   */
  ObservationInterpretationExceptions: "_ObservationInterpretationExceptions",

  /**
   * Off scale low
   */
  Offscalelow: "<",

  /**
   * Off scale high
   */
  Offscalehigh: ">",

  /**
   * Anti-complementary substances present
   */
  Anticomplementarysubstancespresent: "AC",

  /**
   * Insufficient evidence
   */
  Insufficientevidence: "IE",

  /**
   * Quality control failure
   */
  Qualitycontrolfailure: "QCF",

  /**
   * Cytotoxic substance present
   */
  Cytotoxicsubstancepresent: "TOX",

  /**
   * ObservationInterpretationNormality
   */
  ObservationInterpretationNormality: "_ObservationInterpretationNormality",

  /**
   * Abnormal
   */
  Abnormal: "A",

  /**
   * Critical abnormal
   */
  Criticalabnormal: "AA",

  /**
   * Critical high
   */
  Criticalhigh: "HH",

  /**
   * Critical low
   */
  Criticallow: "LL",

  /**
   * High
   */
  High: "H",

  /**
   * Significantly high
   */
  Significantlyhigh: "H>",

  /**
   * Significantly high
   */
  Significantlyhigh: "HU",

  /**
   * Low
   */
  Low: "L",

  /**
   * Significantly low
   */
  Significantlylow: "L<",

  /**
   * Significantly low
   */
  Significantlylow: "LU",

  /**
   * Normal
   */
  Normal: "N",

  /**
   * ObservationInterpretationSusceptibility
   */
  ObservationInterpretationSusceptibility:
    "_ObservationInterpretationSusceptibility",

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

  /**
   * outside threshold
   */
  outsidethreshold: "EX",

  /**
   * above high threshold
   */
  abovehighthreshold: "HX",

  /**
   * below low threshold
   */
  belowlowthreshold: "LX",

  /**
   * Hold for Medical Review
   */
  HoldforMedicalReview: "HM",

  /**
   * ObservationInterpretationDetection
   */
  ObservationInterpretationDetection: "ObservationInterpretationDetection",

  /**
   * Indeterminate
   */
  Indeterminate: "IND",

  /**
   * Equivocal
   */
  Equivocal: "E",

  /**
   * Negative
   */
  Negative: "NEG",

  /**
   * Not detected
   */
  Notdetected: "ND",

  /**
   * Positive
   */
  Positive: "POS",

  /**
   * Detected
   */
  Detected: "DET",

  /**
   * ObservationInterpretationExpectation
   */
  ObservationInterpretationExpectation: "ObservationInterpretationExpectation",

  /**
   * Expected
   */
  Expected: "EXP",

  /**
   * Unexpected
   */
  Unexpected: "UNE",

  /**
   * Interpretation qualifiers in separate OBX segments
   */
  InterpretationqualifiersinseparateOBXsegments: "OBX",

  /**
   * ReactivityObservationInterpretation
   */
  ReactivityObservationInterpretation: "ReactivityObservationInterpretation",

  /**
   * Non-reactive
   */
  Nonreactive: "NR",

  /**
   * Reactive
   */
  Reactive: "RR",

  /**
   * Weakly reactive
   */
  Weaklyreactive: "WR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSInterpretationCodeCode =
  typeof Hl7VSInterpretationCodeCode[keyof typeof Hl7VSInterpretationCodeCode];
