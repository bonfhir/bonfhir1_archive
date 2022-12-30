/**
 * Value Set of codes that specify the kind of device as defined by the manufacturer.
 * http://terminology.hl7.org/ValueSet/v2-0657
 */
export const Hl7VSDeviceTypeCode = {
  /**
   * EO Gas Sterilizer
   */
  "1": "1",

  /**
   * Steam Sterilizer
   */
  "2": "2",

  /**
   * Peracetic Acid
   */
  "3": "3",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDeviceTypeCode =
  typeof Hl7VSDeviceTypeCode[keyof typeof Hl7VSDeviceTypeCode];
