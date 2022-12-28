/**
 * A device intended to administer a substance to a subject
 * http://terminology.hl7.org/ValueSet/v3-AdministrationMedicalDevice
 */
export const AdministrationMedicalDeviceCode = {
  /**
   * InjectionMedicalDevice
   */
  _InjectionMedicalDevice: "_InjectionMedicalDevice",

  /**
   * AutoInjector
   */
  AINJ: "AINJ",

  /**
   * Pen
   */
  PEN: "PEN",

  /**
   * Syringe
   */
  SYR: "SYR",

  /**
   * Applicator
   */
  APLCTR: "APLCTR",

  /**
   * Inhaler
   */
  INH: "INH",

  /**
   * Diskus
   */
  DSKS: "DSKS",

  /**
   * Diskhaler
   */
  DSKUNH: "DSKUNH",

  /**
   * Turbuhaler
   */
  TRBINH: "TRBINH",

  /**
   * Pump
   */
  PMP: "PMP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdministrationMedicalDeviceCode =
  typeof AdministrationMedicalDeviceCode[keyof typeof AdministrationMedicalDeviceCode];
