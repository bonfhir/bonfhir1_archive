/**
 * Concepts of modes or states of being that describe the nature of a specimen.  Used in Version 2 messaging in the SPM segment.
 * http://terminology.hl7.org/ValueSet/v2-0493
 */
export const Hl7VSSpecimenConditionCode = {
  /**
   * Autolyzed
   */
  Autolyzed: "AUT",

  /**
   * Clotted
   */
  Clotted: "CLOT",

  /**
   * Contaminated
   */
  Contaminated: "CON",

  /**
   * Cool
   */
  Cool: "COOL",

  /**
   * Frozen
   */
  Frozen: "FROZ",

  /**
   * Hemolyzed
   */
  Hemolyzed: "HEM",

  /**
   * Live
   */
  Live: "LIVE",

  /**
   * Room temperature
   */
  Roomtemperature: "ROOM",

  /**
   * Sample not received
   */
  Samplenotreceived: "SNR",

  /**
   * Centrifuged
   */
  Centrifuged: "CFU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecimenConditionCode =
  typeof Hl7VSSpecimenConditionCode[keyof typeof Hl7VSSpecimenConditionCode];
