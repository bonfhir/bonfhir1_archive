/**
 * The player of the role is a child of scoping person's brother or sister or of the brother or sister of the scoping person's spouse.
 * http://terminology.hl7.org/ValueSet/v3-NieceNephew
 */
export const NieceNephewCode = {
  /**
   * niece/nephew
   */
  NIENEPH: "NIENEPH",

  /**
   * nephew
   */
  NEPHEW: "NEPHEW",

  /**
   * niece
   */
  NIECE: "NIECE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NieceNephewCode =
  typeof NieceNephewCode[keyof typeof NieceNephewCode];
