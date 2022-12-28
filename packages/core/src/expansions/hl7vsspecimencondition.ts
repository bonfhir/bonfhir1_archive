/**
 * Concepts of modes or states of being that describe the nature of a specimen.  Used in Version 2 messaging in the SPM segment.
 * http://terminology.hl7.org/ValueSet/v2-0493
 */
export const Hl7VSSpecimenConditionCode = {
  /**
   * Autolyzed
   */
  AUT: "AUT",

  /**
   * Clotted
   */
  CLOT: "CLOT",

  /**
   * Contaminated
   */
  CON: "CON",

  /**
   * Cool
   */
  COOL: "COOL",

  /**
   * Frozen
   */
  FROZ: "FROZ",

  /**
   * Hemolyzed
   */
  HEM: "HEM",

  /**
   * Live
   */
  LIVE: "LIVE",

  /**
   * Room temperature
   */
  ROOM: "ROOM",

  /**
   * Sample not received
   */
  SNR: "SNR",

  /**
   * Centrifuged
   */
  CFU: "CFU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecimenConditionCode =
  typeof Hl7VSSpecimenConditionCode[keyof typeof Hl7VSSpecimenConditionCode];
