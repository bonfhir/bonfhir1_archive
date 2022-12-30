/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianCahuilla
 */
export const RaceAmericanIndianCahuillaCode = {
  /**
   * Cahuilla
   */
  "1044-7": "1044-7",

  /**
   * Agua Caliente Cahuilla
   */
  "1045-4": "1045-4",

  /**
   * Augustine
   */
  "1046-2": "1046-2",

  /**
   * Cabazon
   */
  "1047-0": "1047-0",

  /**
   * Los Coyotes
   */
  "1048-8": "1048-8",

  /**
   * Morongo
   */
  "1049-6": "1049-6",

  /**
   * Santa Rosa Cahuilla
   */
  "1050-4": "1050-4",

  /**
   * Torres-Martinez
   */
  "1051-2": "1051-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianCahuillaCode =
  typeof RaceAmericanIndianCahuillaCode[keyof typeof RaceAmericanIndianCahuillaCode];
