/**
 * A code identifying special courtesies extended to the patient. For example, no courtesies, extended courtesies, professional courtesy, VIP courtesies.
 * http://terminology.hl7.org/ValueSet/v3-EncounterSpecialCourtesy
 */
export const EncounterSpecialCourtesyCode = {
  /**
   * extended courtesy
   */
  EXT: "EXT",

  /**
   * normal courtesy
   */
  NRM: "NRM",

  /**
   * professional courtesy
   */
  PRF: "PRF",

  /**
   * staff
   */
  STF: "STF",

  /**
   * very important person
   */
  VIP: "VIP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EncounterSpecialCourtesyCode =
  typeof EncounterSpecialCourtesyCode[keyof typeof EncounterSpecialCourtesyCode];
