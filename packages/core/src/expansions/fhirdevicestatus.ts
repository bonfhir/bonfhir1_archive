/**
 * The availability status of the device.
 * http://terminology.hl7.org/ValueSet/v2-0962
 */
export const FHIRdeviceStatusCode = {
  /**
   * Active
   */
  active: "active",

  /**
   * Inactive
   */
  inactive: "inactive",

  /**
   * Entered in Error
   */
  "entered-in-error": "entered-in-error",

  /**
   * Unknown
   */
  unknown: "unknown",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FHIRdeviceStatusCode =
  typeof FHIRdeviceStatusCode[keyof typeof FHIRdeviceStatusCode];
