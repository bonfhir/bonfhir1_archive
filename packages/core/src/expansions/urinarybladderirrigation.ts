/**
 * Irrigation, urinary bladder
 * http://terminology.hl7.org/ValueSet/v3-UrinaryBladderIrrigation
 */
export const UrinaryBladderIrrigationCode = {
  /**
   * Irrigation, urinary bladder
   */
  BLADIRR: "BLADIRR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UrinaryBladderIrrigationCode =
  typeof UrinaryBladderIrrigationCode[keyof typeof UrinaryBladderIrrigationCode];
