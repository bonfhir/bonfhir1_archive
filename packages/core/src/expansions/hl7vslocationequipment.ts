/**
 * Value Set of codes that identify the equipment available in a location definition identified as a room or bed.
 * http://terminology.hl7.org/ValueSet/v2-0261
 */
export const Hl7VSLocationEquipmentCode = {
  /**
   * Oxygen
   */
  OXY: "OXY",

  /**
   * Suction
   */
  SUC: "SUC",

  /**
   * Vital signs monitor
   */
  VIT: "VIT",

  /**
   * Infusion pump
   */
  INF: "INF",

  /**
   * IV pump
   */
  IVP: "IVP",

  /**
   * Electro-Encephalogram
   */
  EEG: "EEG",

  /**
   * Electro-Cardiogram
   */
  EKG: "EKG",

  /**
   * Ventilator
   */
  VEN: "VEN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLocationEquipmentCode =
  typeof Hl7VSLocationEquipmentCode[keyof typeof Hl7VSLocationEquipmentCode];
