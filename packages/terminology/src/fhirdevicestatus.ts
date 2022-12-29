/**
 * The availability status of the device.
 * http://terminology.hl7.org/ValueSet/v2-0962
 */
export const FHIRdeviceStatusCode = {
  /**
   * Active
   */
  Active: "active",

  /**
   * Inactive
   */
  Inactive: "inactive",

  /**
   * Entered in Error
   */
  EnteredinError: "entered-in-error",

  /**
   * Unknown
   */
  Unknown: "unknown",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FHIRdeviceStatusCode =
  typeof FHIRdeviceStatusCode[keyof typeof FHIRdeviceStatusCode];
