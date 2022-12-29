/**
 * A device used to allow access to a part of a body
 * http://terminology.hl7.org/ValueSet/v3-AccessMedicalDevice
 */
export const AccessMedicalDeviceCode = {
  /**
   * Line
   */
  Line: "LINE",

  /**
   * Intra-arterial Line
   */
  IntraarterialLine: "IALINE",

  /**
   * Intraveneous Line
   */
  IntraveneousLine: "IVLINE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AccessMedicalDeviceCode =
  typeof AccessMedicalDeviceCode[keyof typeof AccessMedicalDeviceCode];
