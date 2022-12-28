/**
 * Value Set of codes that specify the guarantor's employment status.
 * http://terminology.hl7.org/ValueSet/v2-0066
 */
export const Hl7VSEmploymentStatusCode = {
  /**
   * Full time employed
   */
  "1": "1",

  /**
   * Full Time
   */
  F: "F",

  /**
   * see chapter 6
   */
  "...": "...",

  /**
   * Part time employed
   */
  "2": "2",

  /**
   * Part Time
   */
  P: "P",

  /**
   * Self-employed
   */
  "4": "4",

  /**
   * Per Diem
   */
  D: "D",

  /**
   * Contract, per diem
   */
  C: "C",

  /**
   * Leave of absence (e.g., family leave, sabbatical, etc.)
   */
  L: "L",

  /**
   * Temporarily unemployed
   */
  T: "T",

  /**
   * Unemployed
   */
  "3": "3",

  /**
   * Retired
   */
  "5": "5",

  /**
   * On active military duty
   */
  "6": "6",

  /**
   * Other
   */
  O: "O",

  /**
   * Unknown
   */
  "9": "9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEmploymentStatusCode =
  typeof Hl7VSEmploymentStatusCode[keyof typeof Hl7VSEmploymentStatusCode];
