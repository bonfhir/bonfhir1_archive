/**
 * Value Set of codes that identify the equipment available in a location definition identified as a room or bed.
 * http://terminology.hl7.org/ValueSet/v2-0261
 */
export const Hl7VSLocationEquipmentCode = {
  /**
   * Oxygen
   */
  Oxygen: "OXY",

  /**
   * Suction
   */
  Suction: "SUC",

  /**
   * Vital signs monitor
   */
  Vitalsignsmonitor: "VIT",

  /**
   * Infusion pump
   */
  Infusionpump: "INF",

  /**
   * IV pump
   */
  IVpump: "IVP",

  /**
   * Electro-Encephalogram
   */
  ElectroEncephalogram: "EEG",

  /**
   * Electro-Cardiogram
   */
  ElectroCardiogram: "EKG",

  /**
   * Ventilator
   */
  Ventilator: "VEN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLocationEquipmentCode =
  typeof Hl7VSLocationEquipmentCode[keyof typeof Hl7VSLocationEquipmentCode];
