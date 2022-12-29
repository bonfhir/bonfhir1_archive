/**
 * A role played by a place at which services may be provided.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassServiceDeliveryLocation
 */
export const RoleClassServiceDeliveryLocationCode = {
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
export type RoleClassServiceDeliveryLocationCode =
  typeof RoleClassServiceDeliveryLocationCode[keyof typeof RoleClassServiceDeliveryLocationCode];
