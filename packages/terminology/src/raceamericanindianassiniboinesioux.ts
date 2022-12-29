/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAmericanIndianAssiniboineSioux
 */
export const RaceAmericanIndianAssiniboineSiouxCode = {
  /**
   * Assiniboine Sioux
   */
  AssiniboineSioux: "1030-6",

  /**
   * Fort Peck Assiniboine Sioux
   */
  FortPeckAssiniboineSioux: "1031-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAmericanIndianAssiniboineSiouxCode =
  typeof RaceAmericanIndianAssiniboineSiouxCode[keyof typeof RaceAmericanIndianAssiniboineSiouxCode];
