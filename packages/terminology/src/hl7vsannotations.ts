/**
 * Value Set of codes that specify the coded entry associated with a given point in time during the waveform recording.  Note codes beyond 9903 may exist; extensions to this table may be done by incrementing the code value.
 * http://terminology.hl7.org/ValueSet/v2-0317
 */
export const Hl7VSAnnotationsCode = {
  /**
   * Pace spike
   */
  Pacespike: "9900",

  /**
   * SAS marker
   */
  SASmarker: "9901",

  /**
   * Sense marker
   */
  Sensemarker: "9902",

  /**
   * Beat marker
   */
  Beatmarker: "9903",

  /**
   * etc.
   */
  etc: "9904",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAnnotationsCode =
  typeof Hl7VSAnnotationsCode[keyof typeof Hl7VSAnnotationsCode];
