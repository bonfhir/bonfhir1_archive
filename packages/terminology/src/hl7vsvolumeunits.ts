/**
 * Value Set of codes of units of measure that are used to specify volume.
 * http://terminology.hl7.org/ValueSet/v2-0930
 */
export const Hl7VSVolumeUnitsCode = {
  /**
   * l
   */
  l: "l",

  /**
   * [pt_us]
   */
  "[pt_us]": "[pt_us]",

  /**
   * ml
   */
  ml: "ml",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSVolumeUnitsCode =
  typeof Hl7VSVolumeUnitsCode[keyof typeof Hl7VSVolumeUnitsCode];
