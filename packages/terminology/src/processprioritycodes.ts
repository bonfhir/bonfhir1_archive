/**
 * This value set includes the financial processing priority codes.
 * http://terminology.hl7.org/ValueSet/process-priority
 */
export const ProcessPriorityCodesCode = {
  /**
   * Immediate
   */
  Immediate: "stat",

  /**
   * Normal
   */
  Normal: "normal",

  /**
   * Deferred
   */
  Deferred: "deferred",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProcessPriorityCodesCode =
  typeof ProcessPriorityCodesCode[keyof typeof ProcessPriorityCodesCode];
