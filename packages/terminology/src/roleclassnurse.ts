/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassNurse
 */
export const RoleClassNurseCode = {
  /**
   * nurse
   */
  NURS: "NURS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassNurseCode =
  typeof RoleClassNurseCode[keyof typeof RoleClassNurseCode];
