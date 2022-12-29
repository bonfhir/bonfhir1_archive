/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-MedicationObservationType
 */
export const MedicationObservationTypeCode = {
  /**
   * representative half-life
   */
  representativehalflife: "REP_HALF_LIFE",

  /**
   * coating
   */
  coating: "SPLCOATING",

  /**
   * color
   */
  color: "SPLCOLOR",

  /**
   * image
   */
  image: "SPLIMAGE",

  /**
   * imprint
   */
  imprint: "SPLIMPRINT",

  /**
   * scoring
   */
  scoring: "SPLSCORING",

  /**
   * shape
   */
  shape: "SPLSHAPE",

  /**
   * size
   */
  size: "SPLSIZE",

  /**
   * symbol
   */
  symbol: "SPLSYMBOL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MedicationObservationTypeCode =
  typeof MedicationObservationTypeCode[keyof typeof MedicationObservationTypeCode];
