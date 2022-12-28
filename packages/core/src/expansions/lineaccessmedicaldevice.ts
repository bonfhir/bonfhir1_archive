/**
 * A hollow tube used to administer a substance into a vein, artery or body cavity
 * http://terminology.hl7.org/ValueSet/v3-LineAccessMedicalDevice
 */
export const LineAccessMedicalDeviceCode = {
  /**
   * Line
   */
  LINE: "LINE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LineAccessMedicalDeviceCode =
  typeof LineAccessMedicalDeviceCode[keyof typeof LineAccessMedicalDeviceCode];
