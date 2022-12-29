/**
 * **Definition:** The source role provides identification for the target role. The source role must be IDENT. The player entity of the source role is constrained to be the same as the player of the target role if present. If the player is absent from the source role, then it is assumed to be the same as the player of the target role.
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkIdentification
 */
export const RoleLinkIdentificationCode = {
  /**
   * Identification
   */
  Identification: "IDENT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkIdentificationCode =
  typeof RoleLinkIdentificationCode[keyof typeof RoleLinkIdentificationCode];
