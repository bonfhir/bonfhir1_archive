/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassPhysician
 */
export const RoleClassPhysicianCode = {
  /**
   * physician
   */
  physician: "PHYS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassPhysicianCode =
  typeof RoleClassPhysicianCode[keyof typeof RoleClassPhysicianCode];
