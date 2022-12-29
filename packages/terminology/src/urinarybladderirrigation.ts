/**
 * Irrigation, urinary bladder
 * http://terminology.hl7.org/ValueSet/v3-UrinaryBladderIrrigation
 */
export const UrinaryBladderIrrigationCode = {
  /**
   * Irrigation, urinary bladder
   */
  Irrigationurinarybladder: "BLADIRR",

  /**
   * Irrigation, urinary bladder, continuous
   */
  Irrigationurinarybladdercontinuous: "BLADIRRC",

  /**
   * Irrigation, urinary bladder, tidal
   */
  Irrigationurinarybladdertidal: "BLADIRRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UrinaryBladderIrrigationCode =
  typeof UrinaryBladderIrrigationCode[keyof typeof UrinaryBladderIrrigationCode];
