/**
 * Value Set of codes that specify the allowed priorities for obtaining the specimen.
 * http://terminology.hl7.org/ValueSet/v2-0027
 */
export const Hl7VSPriorityCode = {
  /**
   * Stat (do immediately)
   */
  Statdoimmediately: "S",

  /**
   * As soon as possible (a priority lower than stat)
   */
  Assoonaspossibleaprioritylowerthanstat: "A",

  /**
   * Routine
   */
  Routine: "R",

  /**
   * Preoperative (to be done prior to surgery)
   */
  Preoperativetobedonepriortosurgery: "P",

  /**
   * Timing critical (do as near as possible to requested time)
   */
  Timingcriticaldoasnearaspossibletorequestedtime: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPriorityCode =
  typeof Hl7VSPriorityCode[keyof typeof Hl7VSPriorityCode];
