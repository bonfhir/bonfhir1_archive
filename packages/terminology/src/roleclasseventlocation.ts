/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-RoleClassEventLocation
 */
export const RoleClassEventLocationCode = {
  /**
   * event location
   */
  eventlocation: "EXLOC",

  /**
   * service delivery location
   */
  servicedeliverylocation: "SDLOC",

  /**
   * dedicated service delivery location
   */
  dedicatedservicedeliverylocation: "DSDLOC",

  /**
   * incidental service delivery location
   */
  incidentalservicedeliverylocation: "ISDLOC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassEventLocationCode =
  typeof RoleClassEventLocationCode[keyof typeof RoleClassEventLocationCode];
