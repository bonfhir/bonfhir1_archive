/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleLinkStatusNullified
 */
export const RoleLinkStatusNullifiedCode = {
  /**
   * nullified
   */
  nullified: "NULLIFIED",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleLinkStatusNullifiedCode =
  typeof RoleLinkStatusNullifiedCode[keyof typeof RoleLinkStatusNullifiedCode];
