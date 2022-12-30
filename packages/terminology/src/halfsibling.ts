/**
 * The player of the role is related to the scoping entity by sharing only one biological parent.
 * http://terminology.hl7.org/ValueSet/v3-HalfSibling
 */
export const HalfSiblingCode = {
  /**
   * half-sibling
   */
  HSIB: "HSIB",

  /**
   * half-brother
   */
  HBRO: "HBRO",

  /**
   * half-sister
   */
  HSIS: "HSIS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HalfSiblingCode =
  typeof HalfSiblingCode[keyof typeof HalfSiblingCode];
