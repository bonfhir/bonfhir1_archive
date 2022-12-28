/**
 * Example use codes for the List resource - typical kinds of use.
 * http://terminology.hl7.org/ValueSet/list-example-codes
 */
export const ExampleUseCodesForListCode = {
  /**
   * Alerts
   */
  alerts: "alerts",

  /**
   * Adverse Reactions
   */
  adverserxns: "adverserxns",

  /**
   * Allergies
   */
  allergies: "allergies",

  /**
   * Medication List
   */
  medications: "medications",

  /**
   * Problem List
   */
  problems: "problems",

  /**
   * Worklist
   */
  worklist: "worklist",

  /**
   * Waiting List
   */
  waiting: "waiting",

  /**
   * Protocols
   */
  protocols: "protocols",

  /**
   * Care Plans
   */
  plans: "plans",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleUseCodesForListCode =
  typeof ExampleUseCodesForListCode[keyof typeof ExampleUseCodesForListCode];
