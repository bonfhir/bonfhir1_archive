/**
 * A device with direct or indirect therapeutic purpose. Values for EntityCode when EntityClass = "DEV"
 * http://terminology.hl7.org/ValueSet/v3-MedicalDevice
 */
export const MedicalDeviceCode = {
  /**
   * AccessMedicalDevice
   */
  AccessMedicalDevice: "_AccessMedicalDevice",

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

  /**
   * AdministrationMedicalDevice
   */
  AdministrationMedicalDevice: "_AdministrationMedicalDevice",

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
export type MedicalDeviceCode =
  typeof MedicalDeviceCode[keyof typeof MedicalDeviceCode];
