/**
 * Value Set of codes that specify permanent or transient handicapped conditions of a person.
 * http://terminology.hl7.org/ValueSet/v2-0009
 */
export const Hl7VSAmbulatoryStatusCode = {
  /**
   * No functional limitations
   */
  Nofunctionallimitations: "A0",

  /**
   * Ambulates with assistive device
   */
  Ambulateswithassistivedevice: "A1",

  /**
   * Wheelchair/stretcher bound
   */
  Wheelchairstretcherbound: "A2",

  /**
   * Comatose; non-responsive
   */
  Comatosenonresponsive: "A3",

  /**
   * Disoriented
   */
  Disoriented: "A4",

  /**
   * Vision impaired
   */
  Visionimpaired: "A5",

  /**
   * Hearing impaired
   */
  Hearingimpaired: "A6",

  /**
   * Speech impaired
   */
  Speechimpaired: "A7",

  /**
   * Non-English speaking
   */
  NonEnglishspeaking: "A8",

  /**
   * Functional level unknown
   */
  Functionallevelunknown: "A9",

  /**
   * Oxygen therapy
   */
  Oxygentherapy: "B1",

  /**
   * Special equipment (tubes, IVs, catheters)
   */
  SpecialequipmenttubesIVscatheters: "B2",

  /**
   * Amputee
   */
  Amputee: "B3",

  /**
   * Mastectomy
   */
  Mastectomy: "B4",

  /**
   * Paraplegic
   */
  Paraplegic: "B5",

  /**
   * Pregnant
   */
  Pregnant: "B6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAmbulatoryStatusCode =
  typeof Hl7VSAmbulatoryStatusCode[keyof typeof Hl7VSAmbulatoryStatusCode];
