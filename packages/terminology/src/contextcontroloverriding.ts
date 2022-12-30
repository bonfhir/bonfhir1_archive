/**
 * The association adds to the existing context associated with the Act, but replaces associations propagated from ancestor Acts whose typeCodes are the same.
 * http://terminology.hl7.org/ValueSet/v3-ContextControlOverriding
 */
export const ContextControlOverridingCode = {
  /**
   * overriding, non-propagating
   */
  ON: "ON",

  /**
   * overriding, propagating
   */
  OP: "OP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContextControlOverridingCode =
  typeof ContextControlOverridingCode[keyof typeof ContextControlOverridingCode];
