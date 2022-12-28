/**
 * Codes representing the defined possible states of an Role, as defined by the Role class state machine.
 * http://terminology.hl7.org/ValueSet/v3-RoleStatus
 */
export const RoleStatusCode = {
  /**
   * normal
   */
  normal: "normal",

  /**
   * nullified
   */
  nullified: "nullified",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleStatusCode = typeof RoleStatusCode[keyof typeof RoleStatusCode];
