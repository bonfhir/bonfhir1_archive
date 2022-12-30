/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianAssiniboineSioux
 */
export const RaceAmericanIndianAssiniboineSiouxCode = {
  /**
   * Assiniboine Sioux
   */
  "1030-6": "1030-6",

  /**
   * Fort Peck Assiniboine Sioux
   */
  "1031-4": "1031-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianAssiniboineSiouxCode =
  typeof RaceAmericanIndianAssiniboineSiouxCode[keyof typeof RaceAmericanIndianAssiniboineSiouxCode];
