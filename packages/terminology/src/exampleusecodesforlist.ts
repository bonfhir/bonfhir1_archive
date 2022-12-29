/**
 * Example use codes for the List resource - typical kinds of use.
 * http://terminology.hl7.org/ValueSet/list-example-codes
 */
export const ExampleUseCodesForListCode = {
  /**
   * Alerts
   */
  Alerts: "alerts",

  /**
   * Adverse Reactions
   */
  AdverseReactions: "adverserxns",

  /**
   * Allergies
   */
  Allergies: "allergies",

  /**
   * Medication List
   */
  MedicationList: "medications",

  /**
   * Problem List
   */
  ProblemList: "problems",

  /**
   * Worklist
   */
  Worklist: "worklist",

  /**
   * Waiting List
   */
  WaitingList: "waiting",

  /**
   * Protocols
   */
  Protocols: "protocols",

  /**
   * Care Plans
   */
  CarePlans: "plans",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleUseCodesForListCode =
  typeof ExampleUseCodesForListCode[keyof typeof ExampleUseCodesForListCode];
