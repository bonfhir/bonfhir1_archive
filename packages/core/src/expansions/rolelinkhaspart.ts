/**
 * The target Role is part of the Source Role.
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkHasPart
 */
export const RoleLinkHasPartCode = {
  /**
   * has part
   */
  PART: "PART",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkHasPartCode =
  typeof RoleLinkHasPartCode[keyof typeof RoleLinkHasPartCode];
