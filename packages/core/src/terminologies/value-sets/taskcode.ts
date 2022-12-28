/**
 * Codes indicating the type of action that is expected to be performed
 * http://hl7.org/fhir/ValueSet/task-code
 */
export const TaskCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TaskCodeCode = typeof TaskCodeCode[keyof typeof TaskCodeCode];
