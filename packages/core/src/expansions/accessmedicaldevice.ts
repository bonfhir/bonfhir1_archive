/**
 * A device used to allow access to a part of a body
 * http://terminology.hl7.org/ValueSet/v3-AccessMedicalDevice
 */
export const AccessMedicalDeviceCode = {
  /**
   * Line
   */
  LINE: "LINE",

  /**
   * Intra-arterial Line
   */
  IALINE: "IALINE",

  /**
   * Intraveneous Line
   */
  IVLINE: "IVLINE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AccessMedicalDeviceCode =
  typeof AccessMedicalDeviceCode[keyof typeof AccessMedicalDeviceCode];
