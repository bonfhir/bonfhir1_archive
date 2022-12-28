/**
 * A small device used for inhaling medicine in the form of a vapour or gas in order to ease a respiratory condition such as asthma or to relieve nasal congestion.
 * http://terminology.hl7.org/ValueSet/v3-InhalerMedicalDevice
 */
export const InhalerMedicalDeviceCode = {
  /**
   * Inhaler
   */
  INH: "INH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InhalerMedicalDeviceCode =
  typeof InhalerMedicalDeviceCode[keyof typeof InhalerMedicalDeviceCode];
