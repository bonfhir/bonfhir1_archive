/**
 * Codes specifying either Yes or No used in fields containing binary answers generally user-specified.
 * http://terminology.hl7.org/ValueSet/v2-0136
 */
export const Hl7VSYesNoIndicatorCode = {
  /**
   * Yes
   */
  Y: "Y",

  /**
   * No
   */
  N: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSYesNoIndicatorCode =
  typeof Hl7VSYesNoIndicatorCode[keyof typeof Hl7VSYesNoIndicatorCode];
