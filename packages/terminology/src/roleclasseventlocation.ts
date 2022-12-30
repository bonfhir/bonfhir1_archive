/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassEventLocation
 */
export const RoleClassEventLocationCode = {
  /**
   * event location
   */
  EXLOC: "EXLOC",

  /**
   * service delivery location
   */
  SDLOC: "SDLOC",

  /**
   * dedicated service delivery location
   */
  DSDLOC: "DSDLOC",

  /**
   * incidental service delivery location
   */
  ISDLOC: "ISDLOC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassEventLocationCode =
  typeof RoleClassEventLocationCode[keyof typeof RoleClassEventLocationCode];
