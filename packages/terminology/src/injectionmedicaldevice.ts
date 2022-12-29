/**
 * A device intended to administer liquid into a subject via a
 * http://terminology.hl7.org/ValueSet/v3-InjectionMedicalDevice
 */
export const InjectionMedicalDeviceCode = {
  /**
   * AutoInjector
   */
  AutoInjector: "AINJ",

  /**
   * Pen
   */
  Pen: "PEN",

  /**
   * Syringe
   */
  Syringe: "SYR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InjectionMedicalDeviceCode =
  typeof InjectionMedicalDeviceCode[keyof typeof InjectionMedicalDeviceCode];
