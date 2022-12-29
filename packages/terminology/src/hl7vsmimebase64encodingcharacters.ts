/**
 * Value Set of codes that are used for base64 MIME encoding.  Base64 is defined as follows (adapted from MIME Internet standard RFC 1521).
 * http://terminology.hl7.org/ValueSet/v2-0290
 */
export const Hl7VSMimeBase64EncodingCharactersCode = {
  /**
   * A
   */
  A: "0",

  /**
   * B
   */
  B: "1",

  /**
   * C
   */
  C: "2",

  /**
   * D
   */
  D: "3",

  /**
   * E
   */
  E: "4",

  /**
   * F
   */
  F: "5",

  /**
   * G
   */
  G: "6",

  /**
   * H
   */
  H: "7",

  /**
   * I
   */
  I: "8",

  /**
   * J
   */
  J: "9",

  /**
   * K
   */
  K: "10",

  /**
   * L
   */
  L: "11",

  /**
   * M
   */
  M: "12",

  /**
   * N
   */
  N: "13",

  /**
   * O
   */
  O: "14",

  /**
   * P
   */
  P: "15",

  /**
   * Q
   */
  Q: "16",

  /**
   * R
   */
  R: "17",

  /**
   * S
   */
  S: "18",

  /**
   * T
   */
  T: "19",

  /**
   * U
   */
  U: "20",

  /**
   * V
   */
  V: "21",

  /**
   * W
   */
  W: "22",

  /**
   * X
   */
  X: "23",

  /**
   * Y
   */
  Y: "24",

  /**
   * Z
   */
  Z: "25",

  /**
   * a
   */
  a: "26",

  /**
   * b
   */
  b: "27",

  /**
   * c
   */
  c: "28",

  /**
   * d
   */
  d: "29",

  /**
   * e
   */
  e: "30",

  /**
   * f
   */
  f: "31",

  /**
   * g
   */
  g: "32",

  /**
   * h
   */
  h: "33",

  /**
   * I
   */
  I: "34",

  /**
   * j
   */
  j: "35",

  /**
   * k
   */
  k: "36",

  /**
   * l
   */
  l: "37",

  /**
   * m
   */
  m: "38",

  /**
   * n
   */
  n: "39",

  /**
   * o
   */
  o: "40",

  /**
   * p
   */
  p: "41",

  /**
   * q
   */
  q: "42",

  /**
   * r
   */
  r: "43",

  /**
   * s
   */
  s: "44",

  /**
   * t
   */
  t: "45",

  /**
   * u
   */
  u: "46",

  /**
   * v
   */
  v: "47",

  /**
   * w
   */
  w: "48",

  /**
   * x
   */
  x: "49",

  /**
   * y
   */
  y: "50",

  /**
   * z
   */
  z: "51",

  /**
   * 0
   */
  Zero: "52",

  /**
   * 1
   */
  One: "53",

  /**
   * 2
   */
  Two: "54",

  /**
   * 3
   */
  Three: "55",

  /**
   * 4
   */
  Four: "56",

  /**
   * 5
   */
  Five: "57",

  /**
   * 6
   */
  Six: "58",

  /**
   * 7
   */
  Seven: "59",

  /**
   * 8
   */
  Eight: "60",

  /**
   * 9
   */
  Nine: "61",

  /**
   * +
   */
  "62": "62",

  /**
   * /
   */
  "63": "63",

  /**
   * =
   */
  "(pad)": "(pad)",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMimeBase64EncodingCharactersCode =
  typeof Hl7VSMimeBase64EncodingCharactersCode[keyof typeof Hl7VSMimeBase64EncodingCharactersCode];
