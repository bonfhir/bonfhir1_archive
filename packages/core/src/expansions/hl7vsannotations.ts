/**
 * Value Set of codes that specify the coded entry associated with a given point in time during the waveform recording.  Note codes beyond 9903 may exist; extensions to this table may be done by incrementing the code value.
 * http://terminology.hl7.org/ValueSet/v2-0317
 */
export const Hl7VSAnnotationsCode = {
  /**
   * Pace spike
   */
  "9900": "9900",

  /**
   * SAS marker
   */
  "9901": "9901",

  /**
   * Sense marker
   */
  "9902": "9902",

  /**
   * Beat marker
   */
  "9903": "9903",

  /**
   * etc.
   */
  "9904": "9904",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAnnotationsCode =
  typeof Hl7VSAnnotationsCode[keyof typeof Hl7VSAnnotationsCode];
