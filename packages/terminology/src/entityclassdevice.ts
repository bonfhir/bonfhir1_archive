/**
 * A subtype of ManufacturedMaterial used in an activity, without being substantially changed through that activity. The kind of device is identified by the code attribute inherited from Entity.

*Usage:* This includes durable (reusable) medical equipment as well as disposable equipment.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassDevice
 */
export const EntityClassDeviceCode = {
  /**
   * device
   */
  DEV: "DEV",

  /**
   * certificate representation
   */
  CER: "CER",

  /**
   * imaging modality
   */
  MODDV: "MODDV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassDeviceCode =
  typeof EntityClassDeviceCode[keyof typeof EntityClassDeviceCode];
