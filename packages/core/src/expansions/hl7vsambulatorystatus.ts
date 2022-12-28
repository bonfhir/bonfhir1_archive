/**
 * Value Set of codes that specify permanent or transient handicapped conditions of a person.
 * http://terminology.hl7.org/ValueSet/v2-0009
 */
export const Hl7VSAmbulatoryStatusCode = {
  /**
   * No functional limitations
   */
  A0: "A0",

  /**
   * Ambulates with assistive device
   */
  A1: "A1",

  /**
   * Wheelchair/stretcher bound
   */
  A2: "A2",

  /**
   * Comatose; non-responsive
   */
  A3: "A3",

  /**
   * Disoriented
   */
  A4: "A4",

  /**
   * Vision impaired
   */
  A5: "A5",

  /**
   * Hearing impaired
   */
  A6: "A6",

  /**
   * Speech impaired
   */
  A7: "A7",

  /**
   * Non-English speaking
   */
  A8: "A8",

  /**
   * Functional level unknown
   */
  A9: "A9",

  /**
   * Oxygen therapy
   */
  B1: "B1",

  /**
   * Special equipment (tubes, IVs, catheters)
   */
  B2: "B2",

  /**
   * Amputee
   */
  B3: "B3",

  /**
   * Mastectomy
   */
  B4: "B4",

  /**
   * Paraplegic
   */
  B5: "B5",

  /**
   * Pregnant
   */
  B6: "B6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAmbulatoryStatusCode =
  typeof Hl7VSAmbulatoryStatusCode[keyof typeof Hl7VSAmbulatoryStatusCode];
