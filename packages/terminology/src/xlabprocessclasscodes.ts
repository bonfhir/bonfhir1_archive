/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xLabProcessClassCodes
 */
export const XLabProcessClassCodesCode = {
  /**
   * accession
   */
  ACSN: "ACSN",

  /**
   * container registration
   */
  CONTREG: "CONTREG",

  /**
   * observation
   */
  OBS: "OBS",

  /**
   * procedure
   */
  PROC: "PROC",

  /**
   * specimen treatment
   */
  SPCTRT: "SPCTRT",

  /**
   * Specimen Collection
   */
  SPECCOLLECT: "SPECCOLLECT",

  /**
   * storage
   */
  STORE: "STORE",

  /**
   * transportation
   */
  TRNS: "TRNS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XLabProcessClassCodesCode =
  typeof XLabProcessClassCodesCode[keyof typeof XLabProcessClassCodesCode];
