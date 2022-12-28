/**
 * A role played by a place at which health care services may be provided without prior designation or authorization.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassIncidentalServiceDeliveryLocation
 */
export const RoleClassIncidentalServiceDeliveryLocationCode = {
  /**
   * incidental service delivery location
   */
  ISDLOC: "ISDLOC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassIncidentalServiceDeliveryLocationCode =
  typeof RoleClassIncidentalServiceDeliveryLocationCode[keyof typeof RoleClassIncidentalServiceDeliveryLocationCode];
