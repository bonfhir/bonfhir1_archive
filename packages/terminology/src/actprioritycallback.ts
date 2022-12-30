/**
 * Filler should contact the placer (or target) to schedule the service. (Was "C" in HL7 version 2.3's TQ-priority component.)
 * http://terminology.hl7.org/ValueSet/v3-ActPriorityCallback
 */
export const ActPriorityCallbackCode = {
  /**
   * callback for scheduling
   */
  CS: "CS",

  /**
   * callback placer for scheduling
   */
  CSP: "CSP",

  /**
   * contact recipient for scheduling
   */
  CSR: "CSR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPriorityCallbackCode =
  typeof ActPriorityCallbackCode[keyof typeof ActPriorityCallbackCode];
