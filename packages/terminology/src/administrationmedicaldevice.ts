/**
 * A device intended to administer a substance to a subject
 * http://terminology.hl7.org/ValueSet/v3-AdministrationMedicalDevice
 */
export const AdministrationMedicalDeviceCode = {
  /**
   * InjectionMedicalDevice
   */
  InjectionMedicalDevice: "_InjectionMedicalDevice",

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

  /**
   * Applicator
   */
  Applicator: "APLCTR",

  /**
   * Inhaler
   */
  Inhaler: "INH",

  /**
   * Diskus
   */
  Diskus: "DSKS",

  /**
   * Diskhaler
   */
  Diskhaler: "DSKUNH",

  /**
   * Turbuhaler
   */
  Turbuhaler: "TRBINH",

  /**
   * Pump
   */
  Pump: "PMP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdministrationMedicalDeviceCode =
  typeof AdministrationMedicalDeviceCode[keyof typeof AdministrationMedicalDeviceCode];
