/**
 * Value Set of codes that specify the guarantor's employment status.
 * http://terminology.hl7.org/ValueSet/v2-0066
 */
export const Hl7VSEmploymentStatusCode = {
  /**
   * Full time employed
   */
  Fulltimeemployed: "1",

  /**
   * Full Time
   */
  FullTime: "F",

  /**
   * see chapter 6
   */
  seechapter6: "...",

  /**
   * Part time employed
   */
  Parttimeemployed: "2",

  /**
   * Part Time
   */
  PartTime: "P",

  /**
   * Self-employed
   */
  Selfemployed: "4",

  /**
   * Per Diem
   */
  PerDiem: "D",

  /**
   * Contract, per diem
   */
  Contractperdiem: "C",

  /**
   * Leave of absence (e.g., family leave, sabbatical, etc.)
   */
  Leaveofabsenceegfamilyleavesabbaticaletc: "L",

  /**
   * Temporarily unemployed
   */
  Temporarilyunemployed: "T",

  /**
   * Unemployed
   */
  Unemployed: "3",

  /**
   * Retired
   */
  Retired: "5",

  /**
   * On active military duty
   */
  Onactivemilitaryduty: "6",

  /**
   * Other
   */
  Other: "O",

  /**
   * Unknown
   */
  Unknown: "9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEmploymentStatusCode =
  typeof Hl7VSEmploymentStatusCode[keyof typeof Hl7VSEmploymentStatusCode];
