/**
 * A device with direct or indirect therapeutic purpose. Values for EntityCode when EntityClass = "DEV"
 * http://terminology.hl7.org/ValueSet/v3-MedicalDevice
 */
export const MedicalDeviceCode = {
  /**
   * AccessMedicalDevice
   */
  _AccessMedicalDevice: "_AccessMedicalDevice",

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

  /**
   * AdministrationMedicalDevice
   */
  _AdministrationMedicalDevice: "_AdministrationMedicalDevice",

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
export type MedicalDeviceCode =
  typeof MedicalDeviceCode[keyof typeof MedicalDeviceCode];
