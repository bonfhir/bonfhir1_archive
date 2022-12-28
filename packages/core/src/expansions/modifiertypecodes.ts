/**
 * This value set includes sample Modifier type codes.
 * http://terminology.hl7.org/ValueSet/claim-modifiers
 */
export const ModifierTypeCodesCode = {
  /**
   * Repair of prior service or installation
   */
  a: "a",

  /**
   * Temporary service or installation
   */
  b: "b",

  /**
   * TMJ treatment
   */
  c: "c",

  /**
   * Implant or associated with an implant
   */
  e: "e",

  /**
   * Rush or Outside of office hours
   */
  rooh: "rooh",

  /**
   * None
   */
  x: "x",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ModifierTypeCodesCode =
  typeof ModifierTypeCodesCode[keyof typeof ModifierTypeCodesCode];
