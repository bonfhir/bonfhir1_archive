/**
 * Distinguishes whether the task is a proposal, plan or full order.
 * http://hl7.org/fhir/ValueSet/task-intent
 */
export const TaskIntentCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TaskIntentCode = typeof TaskIntentCode[keyof typeof TaskIntentCode];
