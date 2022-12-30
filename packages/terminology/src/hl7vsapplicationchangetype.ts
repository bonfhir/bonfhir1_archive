/**
 * Value Set of codes that specify a type of change being requested (if NMR query) or announced (if NMD unsolicited update).
 * http://terminology.hl7.org/ValueSet/v2-0409
 */
export const Hl7VSApplicationChangeTypeCode = {
  /**
   * Start up
   */
  SU: "SU",

  /**
   * Shut down
   */
  SD: "SD",

  /**
   * Migrates to different CPU
   */
  M: "M",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSApplicationChangeTypeCode =
  typeof Hl7VSApplicationChangeTypeCode[keyof typeof Hl7VSApplicationChangeTypeCode];
