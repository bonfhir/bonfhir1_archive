/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-MedicationObservationType
 */
export const MedicationObservationTypeCode = {
  /**
   * representative half-life
   */
  REP_HALF_LIFE: "REP_HALF_LIFE",

  /**
   * coating
   */
  SPLCOATING: "SPLCOATING",

  /**
   * color
   */
  SPLCOLOR: "SPLCOLOR",

  /**
   * image
   */
  SPLIMAGE: "SPLIMAGE",

  /**
   * imprint
   */
  SPLIMPRINT: "SPLIMPRINT",

  /**
   * scoring
   */
  SPLSCORING: "SPLSCORING",

  /**
   * shape
   */
  SPLSHAPE: "SPLSHAPE",

  /**
   * size
   */
  SPLSIZE: "SPLSIZE",

  /**
   * symbol
   */
  SPLSYMBOL: "SPLSYMBOL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationObservationTypeCode =
  typeof MedicationObservationTypeCode[keyof typeof MedicationObservationTypeCode];
