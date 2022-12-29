/**
 * Value Set of codes that specify the state of a bed in an inpatient setting, and is used to determine if a patient may be assigned to it or not.
 * http://terminology.hl7.org/ValueSet/v2-0116
 */
export const Hl7VSBedStatusCode = {
  /**
   * Closed
   */
  Closed: "C",

  /**
   * Housekeeping
   */
  Housekeeping: "H",

  /**
   * Occupied
   */
  Occupied: "O",

  /**
   * Unoccupied
   */
  Unoccupied: "U",

  /**
   * Contaminated
   */
  Contaminated: "K",

  /**
   * Isolated
   */
  Isolated: "I",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBedStatusCode =
  typeof Hl7VSBedStatusCode[keyof typeof Hl7VSBedStatusCode];
