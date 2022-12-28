/**
 * Value Set of codes that specify the state of a bed in an inpatient setting, and is used to determine if a patient may be assigned to it or not.
 * http://terminology.hl7.org/ValueSet/v2-0116
 */
export const Hl7VSBedStatusCode = {
  /**
   * Closed
   */
  C: "C",

  /**
   * Housekeeping
   */
  H: "H",

  /**
   * Occupied
   */
  O: "O",

  /**
   * Unoccupied
   */
  U: "U",

  /**
   * Contaminated
   */
  K: "K",

  /**
   * Isolated
   */
  I: "I",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBedStatusCode =
  typeof Hl7VSBedStatusCode[keyof typeof Hl7VSBedStatusCode];
