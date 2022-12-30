/**
 * Primary dentition, the first teeth to errupt and usually replaced with permanent dentition
 * http://terminology.hl7.org/ValueSet/v3-PrimaryDentition
 */
export const PrimaryDentitionCode = {
  /**
   * A
   */
  TIDA: "TIDA",

  /**
   * B
   */
  TIDB: "TIDB",

  /**
   * C
   */
  TIDC: "TIDC",

  /**
   * D
   */
  TIDD: "TIDD",

  /**
   * E
   */
  TIDE: "TIDE",

  /**
   * F
   */
  TIDF: "TIDF",

  /**
   * G
   */
  TIDG: "TIDG",

  /**
   * H
   */
  TIDH: "TIDH",

  /**
   * I
   */
  TIDI: "TIDI",

  /**
   * J
   */
  TIDJ: "TIDJ",

  /**
   * K
   */
  TIDK: "TIDK",

  /**
   * L
   */
  TIDL: "TIDL",

  /**
   * M
   */
  TIDM: "TIDM",

  /**
   * N
   */
  TIDN: "TIDN",

  /**
   * O
   */
  TIDO: "TIDO",

  /**
   * P
   */
  TIDP: "TIDP",

  /**
   * Q
   */
  TIDQ: "TIDQ",

  /**
   * R
   */
  TIDR: "TIDR",

  /**
   * S
   */
  TIDS: "TIDS",

  /**
   * T
   */
  TIDT: "TIDT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PrimaryDentitionCode =
  typeof PrimaryDentitionCode[keyof typeof PrimaryDentitionCode];
