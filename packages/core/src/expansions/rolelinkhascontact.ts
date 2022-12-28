/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkHasContact
 */
export const RoleLinkHasContactCode = {
  /**
   * has contact
   */
  CONT: "CONT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkHasContactCode =
  typeof RoleLinkHasContactCode[keyof typeof RoleLinkHasContactCode];
