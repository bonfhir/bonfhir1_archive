/**
 * Irrigation
 * http://terminology.hl7.org/ValueSet/v3-Irrigation
 */
export const IrrigationCode = {
  /**
   * Irrigation, genitourinary
   */
  GUIRR: "GUIRR",

  /**
   * Irrigation, intragastric
   */
  IGASTIRR: "IGASTIRR",

  /**
   * Irrigation, intralesional
   */
  ILESIRR: "ILESIRR",

  /**
   * Irrigation, intraocular
   */
  IOIRR: "IOIRR",

  /**
   * Irrigation, urinary bladder
   */
  BLADIRR: "BLADIRR",

  /**
   * Irrigation, urinary bladder, continuous
   */
  BLADIRRC: "BLADIRRC",

  /**
   * Irrigation, urinary bladder, tidal
   */
  BLADIRRT: "BLADIRRT",

  /**
   * Irrigation, rectal
   */
  RECIRR: "RECIRR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IrrigationCode = typeof IrrigationCode[keyof typeof IrrigationCode];
