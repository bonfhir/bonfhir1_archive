/**
 * The player of the role is a child taken into a family through legal means and raised by the scoping person (parent) as his or her own child.
 * http://terminology.hl7.org/ValueSet/v3-AdoptedChild
 */
export const AdoptedChildCode = {
  /**
   * adopted child
   */
  CHLDADOPT: "CHLDADOPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdoptedChildCode =
  typeof AdoptedChildCode[keyof typeof AdoptedChildCode];
