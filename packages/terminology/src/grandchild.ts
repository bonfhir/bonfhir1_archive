/**
 * The player of the role is a child of the scoping person's son or daughter.
 * http://terminology.hl7.org/ValueSet/v3-GrandChild
 */
export const GrandChildCode = {
  /**
   * grandchild
   */
  GRNDCHILD: "GRNDCHILD",

  /**
   * granddaughter
   */
  GRNDDAU: "GRNDDAU",

  /**
   * grandson
   */
  GRNDSON: "GRNDSON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GrandChildCode = typeof GrandChildCode[keyof typeof GrandChildCode];
