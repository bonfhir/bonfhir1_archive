/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xDeterminerInstanceKind
 */
export const XDeterminerInstanceKindCode = {
  /**
   * specific
   */
  INSTANCE: "INSTANCE",

  /**
   * described
   */
  KIND: "KIND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XDeterminerInstanceKindCode =
  typeof XDeterminerInstanceKindCode[keyof typeof XDeterminerInstanceKindCode];
