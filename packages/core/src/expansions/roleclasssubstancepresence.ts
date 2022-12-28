/**
 *
 * http://terminology.hl7.org/ValueSet/v3-RoleClassSubstancePresence
 */
export const RoleClassSubstancePresenceCode = {
  /**
   * part
   */
  PART: "PART",

  /**
   * active moiety
   */
  ACTM: "ACTM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassSubstancePresenceCode =
  typeof RoleClassSubstancePresenceCode[keyof typeof RoleClassSubstancePresenceCode];
