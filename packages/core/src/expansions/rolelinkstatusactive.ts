/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkStatusActive
 */
export const RoleLinkStatusActiveCode = {
  /**
   * active
   */
  ACTIVE: "ACTIVE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkStatusActiveCode =
  typeof RoleLinkStatusActiveCode[keyof typeof RoleLinkStatusActiveCode];
