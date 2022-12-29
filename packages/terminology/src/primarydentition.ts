/**
 * Primary dentition, the first teeth to errupt and usually replaced with permanent dentition
 * http://terminology.hl7.org/ValueSet/v3-PrimaryDentition
 */
export const PrimaryDentitionCode = {
  /**
   * A
   */
  A: "TIDA",

  /**
   * B
   */
  B: "TIDB",

  /**
   * C
   */
  C: "TIDC",

  /**
   * D
   */
  D: "TIDD",

  /**
   * E
   */
  E: "TIDE",

  /**
   * F
   */
  F: "TIDF",

  /**
   * G
   */
  G: "TIDG",

  /**
   * H
   */
  H: "TIDH",

  /**
   * I
   */
  I: "TIDI",

  /**
   * J
   */
  J: "TIDJ",

  /**
   * K
   */
  K: "TIDK",

  /**
   * L
   */
  L: "TIDL",

  /**
   * M
   */
  M: "TIDM",

  /**
   * N
   */
  N: "TIDN",

  /**
   * O
   */
  O: "TIDO",

  /**
   * P
   */
  P: "TIDP",

  /**
   * Q
   */
  Q: "TIDQ",

  /**
   * R
   */
  R: "TIDR",

  /**
   * S
   */
  S: "TIDS",

  /**
   * T
   */
  T: "TIDT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PrimaryDentitionCode =
  typeof PrimaryDentitionCode[keyof typeof PrimaryDentitionCode];
