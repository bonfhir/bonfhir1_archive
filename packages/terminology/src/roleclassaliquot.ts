/**
 * A portion (player) of an original or source specimen (scoper) used for testing or transportation.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassAliquot
 */
export const RoleClassAliquotCode = {
  /**
   * aliquot
   */
  aliquot: "ALQT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassAliquotCode =
  typeof RoleClassAliquotCode[keyof typeof RoleClassAliquotCode];
