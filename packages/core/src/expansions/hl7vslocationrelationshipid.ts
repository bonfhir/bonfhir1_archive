/**
 * Value Set of codes that specify an identifier code to show which relationship is being communicated with the segment.
 * http://terminology.hl7.org/ValueSet/v2-0325
 */
export const Hl7VSLocationRelationshipIdCode = {
  /**
   * Nearest  pharmacy
   */
  RX: "RX",

  /**
   * Second nearest pharmacy
   */
  RX2: "RX2",

  /**
   * Nearest  lab
   */
  LAB: "LAB",

  /**
   * Second nearest lab
   */
  LB2: "LB2",

  /**
   * Nearest  dietary location
   */
  DTY: "DTY",

  /**
   * Location Alias(es)
   */
  ALI: "ALI",

  /**
   * Parent location
   */
  PAR: "PAR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLocationRelationshipIdCode =
  typeof Hl7VSLocationRelationshipIdCode[keyof typeof Hl7VSLocationRelationshipIdCode];
