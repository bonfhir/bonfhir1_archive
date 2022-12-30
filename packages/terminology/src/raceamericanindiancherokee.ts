/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianCherokee
 */
export const RaceAmericanIndianCherokeeCode = {
  /**
   * Cherokee
   */
  "1088-4": "1088-4",

  /**
   * Cherokee Alabama
   */
  "1089-2": "1089-2",

  /**
   * Cherokees of Northeast Alabama
   */
  "1090-0": "1090-0",

  /**
   * Cherokees of Southeast Alabama
   */
  "1091-8": "1091-8",

  /**
   * Eastern Cherokee
   */
  "1092-6": "1092-6",

  /**
   * Echota Cherokee
   */
  "1093-4": "1093-4",

  /**
   * Etowah Cherokee
   */
  "1094-2": "1094-2",

  /**
   * Northern Cherokee
   */
  "1095-9": "1095-9",

  /**
   * Tuscola
   */
  "1096-7": "1096-7",

  /**
   * United Keetowah Band of Cherokee
   */
  "1097-5": "1097-5",

  /**
   * Western Cherokee
   */
  "1098-3": "1098-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianCherokeeCode =
  typeof RaceAmericanIndianCherokeeCode[keyof typeof RaceAmericanIndianCherokeeCode];
