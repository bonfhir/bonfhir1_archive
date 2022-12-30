/**
 * Value Set of codes that specify who (if anyone) shouldor should not be informed of an error.
 * http://terminology.hl7.org/ValueSet/v2-0517
 */
export const Hl7VSInformPersonCodeCode = {
  /**
   * Inform patient
   */
  PAT: "PAT",

  /**
   * Do NOT inform patient
   */
  NPAT: "NPAT",

  /**
   * Inform User
   */
  USR: "USR",

  /**
   * Inform help desk
   */
  HD: "HD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSInformPersonCodeCode =
  typeof Hl7VSInformPersonCodeCode[keyof typeof Hl7VSInformPersonCodeCode];
