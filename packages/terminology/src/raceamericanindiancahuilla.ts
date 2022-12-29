/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianCahuilla
 */
export const RaceAmericanIndianCahuillaCode = {
  /**
   * Cahuilla
   */
  Cahuilla: "1044-7",

  /**
   * Agua Caliente Cahuilla
   */
  AguaCalienteCahuilla: "1045-4",

  /**
   * Augustine
   */
  Augustine: "1046-2",

  /**
   * Cabazon
   */
  Cabazon: "1047-0",

  /**
   * Los Coyotes
   */
  LosCoyotes: "1048-8",

  /**
   * Morongo
   */
  Morongo: "1049-6",

  /**
   * Santa Rosa Cahuilla
   */
  SantaRosaCahuilla: "1050-4",

  /**
   * Torres-Martinez
   */
  TorresMartinez: "1051-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianCahuillaCode =
  typeof RaceAmericanIndianCahuillaCode[keyof typeof RaceAmericanIndianCahuillaCode];
