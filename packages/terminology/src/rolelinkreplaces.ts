/**
 * This relationship indicates that the source Role replaces (or subsumes) the target Role. Allows for new identifiers and/or new effective time for a registry entry or a certification, etc.
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkReplaces
 */
export const RoleLinkReplacesCode = {
  /**
   * replaces
   */
  replaces: "REPL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkReplacesCode =
  typeof RoleLinkReplacesCode[keyof typeof RoleLinkReplacesCode];
