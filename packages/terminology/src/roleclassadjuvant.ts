/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassAdjuvant
 */
export const RoleClassAdjuvantCode = {
  /**
   * adjuvant
   */
  adjuvant: "ADJV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassAdjuvantCode =
  typeof RoleClassAdjuvantCode[keyof typeof RoleClassAdjuvantCode];
