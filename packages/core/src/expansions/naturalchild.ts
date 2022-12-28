/**
 * A child as determined by birth.
 * http://terminology.hl7.org/ValueSet/v3-NaturalChild
 */
export const NaturalChildCode = {
  /**
   * natural child
   */
  NCHILD: "NCHILD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NaturalChildCode =
  typeof NaturalChildCode[keyof typeof NaturalChildCode];
