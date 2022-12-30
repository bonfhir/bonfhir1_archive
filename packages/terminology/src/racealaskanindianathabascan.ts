/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RaceAlaskanIndianAthabascan
 */
export const RaceAlaskanIndianAthabascanCode = {
  /**
   * Alaskan Athabascan
   */
  "1739-2": "1739-2",

  /**
   * Ahtna
   */
  "1740-0": "1740-0",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RaceAlaskanIndianAthabascanCode =
  typeof RaceAlaskanIndianAthabascanCode[keyof typeof RaceAlaskanIndianAthabascanCode];
