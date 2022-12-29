/**
 * Value Set of codes that specify an identifier code to show which relationship is being communicated with the segment.
 * http://terminology.hl7.org/ValueSet/v2-0325
 */
export const Hl7VSLocationRelationshipIdCode = {
  /**
   * Nearest  pharmacy
   */
  Nearestpharmacy: "RX",

  /**
   * Second nearest pharmacy
   */
  Secondnearestpharmacy: "RX2",

  /**
   * Nearest  lab
   */
  Nearestlab: "LAB",

  /**
   * Second nearest lab
   */
  Secondnearestlab: "LB2",

  /**
   * Nearest  dietary location
   */
  Nearestdietarylocation: "DTY",

  /**
   * Location Alias(es)
   */
  LocationAliases: "ALI",

  /**
   * Parent location
   */
  Parentlocation: "PAR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLocationRelationshipIdCode =
  typeof Hl7VSLocationRelationshipIdCode[keyof typeof Hl7VSLocationRelationshipIdCode];
