/**
 * Value Set of codes that specify an identifier code to show which characteristic is being communicated with the segment.
 * http://terminology.hl7.org/ValueSet/v2-0324
 */
export const Hl7VSLocationCharacteristicIdCode = {
  /**
   * Smoking
   */
  Smoking: "SMK",

  /**
   * Licensed
   */
  Licensed: "LIC",

  /**
   * Implant: can be used for radiation implant patients
   */
  Implantcanbeusedforradiationimplantpatients: "IMP",

  /**
   * Shadow: a temporary holding location that does not physically exist
   */
  Shadowatemporaryholdinglocationthatdoesnotphysicallyexist: "SHA",

  /**
   * Infectious disease: this location can be used for isolation
   */
  Infectiousdiseasethislocationcanbeusedforisolation: "INF",

  /**
   * Privacy level: indicating the level of private versus non-private room
   */
  Privacylevelindicatingthelevelofprivateversusnonprivateroom: "PRL",

  /**
   * Level of care
   */
  Levelofcare: "LCR",

  /**
   * Overflow
   */
  Overflow: "OVR",

  /**
   * Bed is staffed
   */
  Bedisstaffed: "STF",

  /**
   * Bed is set up
   */
  Bedissetup: "SET",

  /**
   * Gender of patient(s)
   */
  Genderofpatients: "GEN",

  /**
   * Teaching location
   */
  Teachinglocation: "TEA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLocationCharacteristicIdCode =
  typeof Hl7VSLocationCharacteristicIdCode[keyof typeof Hl7VSLocationCharacteristicIdCode];
