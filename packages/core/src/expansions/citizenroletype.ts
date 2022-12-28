/**
 * A role type used to qualify a person's legal status within a country or nation.

**Examples:**

 *  Full citizen
 *  Asylum seeker
 *  Permit card holder
 * http://terminology.hl7.org/ValueSet/v3-CitizenRoleType
 */
export const CitizenRoleTypeCode = {
  /**
   * CitizenRoleType
   */
  _CitizenRoleType: "_CitizenRoleType",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CitizenRoleTypeCode =
  typeof CitizenRoleTypeCode[keyof typeof CitizenRoleTypeCode];
