/**
 * Clones using this x\_domain should have a name "performer".
 * http://terminology.hl7.org/ValueSet/v3-xServiceEventPerformer
 */
export const XServiceEventPerformerCode = {
  /**
   * primary performer
   */
  PPRF: "PPRF",

  /**
   * performer
   */
  PRF: "PRF",

  /**
   * secondary performer
   */
  SPRF: "SPRF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XServiceEventPerformerCode =
  typeof XServiceEventPerformerCode[keyof typeof XServiceEventPerformerCode];
