/**
 * A grouping of Definition, Event. These specific moods are used in control wrapper override acts. The domain is restricted to acts that are possible to occur or have already occurred.
 * http://terminology.hl7.org/ValueSet/v3-xActMoodDefEvn
 */
export const XActMoodDefEvnCode = {
  /**
   * definition
   */
  DEF: "DEF",

  /**
   * event (occurrence)
   */
  EVN: "EVN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActMoodDefEvnCode =
  typeof XActMoodDefEvnCode[keyof typeof XActMoodDefEvnCode];
