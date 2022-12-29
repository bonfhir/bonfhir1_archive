/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianCherokee
 */
export const RaceAmericanIndianCherokeeCode = {
  /**
   * Cherokee
   */
  Cherokee: "1088-4",

  /**
   * Cherokee Alabama
   */
  CherokeeAlabama: "1089-2",

  /**
   * Cherokees of Northeast Alabama
   */
  CherokeesofNortheastAlabama: "1090-0",

  /**
   * Cherokees of Southeast Alabama
   */
  CherokeesofSoutheastAlabama: "1091-8",

  /**
   * Eastern Cherokee
   */
  EasternCherokee: "1092-6",

  /**
   * Echota Cherokee
   */
  EchotaCherokee: "1093-4",

  /**
   * Etowah Cherokee
   */
  EtowahCherokee: "1094-2",

  /**
   * Northern Cherokee
   */
  NorthernCherokee: "1095-9",

  /**
   * Tuscola
   */
  Tuscola: "1096-7",

  /**
   * United Keetowah Band of Cherokee
   */
  UnitedKeetowahBandofCherokee: "1097-5",

  /**
   * Western Cherokee
   */
  WesternCherokee: "1098-3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianCherokeeCode =
  typeof RaceAmericanIndianCherokeeCode[keyof typeof RaceAmericanIndianCherokeeCode];
