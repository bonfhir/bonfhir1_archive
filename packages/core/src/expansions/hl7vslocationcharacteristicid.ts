/**
 * Value Set of codes that specify an identifier code to show which characteristic is being communicated with the segment.
 * http://terminology.hl7.org/ValueSet/v2-0324
 */
export const Hl7VSLocationCharacteristicIdCode = {
  /**
   * Smoking
   */
  SMK: "SMK",

  /**
   * Licensed
   */
  LIC: "LIC",

  /**
   * Implant: can be used for radiation implant patients
   */
  IMP: "IMP",

  /**
   * Shadow: a temporary holding location that does not physically exist
   */
  SHA: "SHA",

  /**
   * Infectious disease: this location can be used for isolation
   */
  INF: "INF",

  /**
   * Privacy level: indicating the level of private versus non-private room
   */
  PRL: "PRL",

  /**
   * Level of care
   */
  LCR: "LCR",

  /**
   * Overflow
   */
  OVR: "OVR",

  /**
   * Bed is staffed
   */
  STF: "STF",

  /**
   * Bed is set up
   */
  SET: "SET",

  /**
   * Gender of patient(s)
   */
  GEN: "GEN",

  /**
   * Teaching location
   */
  TEA: "TEA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLocationCharacteristicIdCode =
  typeof Hl7VSLocationCharacteristicIdCode[keyof typeof Hl7VSLocationCharacteristicIdCode];
