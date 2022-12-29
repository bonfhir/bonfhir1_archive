/**
 * Value Set of codes that specify an act containing a rule that the item is legally required to be included in notification reporting.
 * http://terminology.hl7.org/ValueSet/v2-0793
 */
export const Hl7VSRulingActCode = {
  /**
   * Safe Medical Devices Act
   */
  SafeMedicalDevicesAct: "SMDA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRulingActCode =
  typeof Hl7VSRulingActCode[keyof typeof Hl7VSRulingActCode];
