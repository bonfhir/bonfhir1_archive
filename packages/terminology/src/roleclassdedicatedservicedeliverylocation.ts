/**
 * A role of a place (player) that is intended to house the provision of services. Scoper is the Entity (typically Organization) that provides these services. This is not synonymous with "ownership."
 * http://terminology.hl7.org/ValueSet/v3-RoleClassDedicatedServiceDeliveryLocation
 */
export const RoleClassDedicatedServiceDeliveryLocationCode = {
  /**
   * dedicated service delivery location
   */
  DSDLOC: "DSDLOC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassDedicatedServiceDeliveryLocationCode =
  typeof RoleClassDedicatedServiceDeliveryLocationCode[keyof typeof RoleClassDedicatedServiceDeliveryLocationCode];
