/**
 * Irrigation
 * http://terminology.hl7.org/ValueSet/v3-Irrigation
 */
export const IrrigationCode = {
  /**
   * Irrigation, genitourinary
   */
  Irrigationgenitourinary: "GUIRR",

  /**
   * Irrigation, intragastric
   */
  Irrigationintragastric: "IGASTIRR",

  /**
   * Irrigation, intralesional
   */
  Irrigationintralesional: "ILESIRR",

  /**
   * Irrigation, intraocular
   */
  Irrigationintraocular: "IOIRR",

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

  /**
   * Irrigation, rectal
   */
  Irrigationrectal: "RECIRR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IrrigationCode = typeof IrrigationCode[keyof typeof IrrigationCode];
