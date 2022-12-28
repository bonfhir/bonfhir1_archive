/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassEventLocation
 */
export const RoleClassEventLocationCode = {
  /**
   * event location
   */
  EXLOC: "EXLOC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassEventLocationCode =
  typeof RoleClassEventLocationCode[keyof typeof RoleClassEventLocationCode];
