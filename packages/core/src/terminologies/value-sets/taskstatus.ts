/**
 * The current status of the task.
 * http://hl7.org/fhir/ValueSet/task-status
 */
export const TaskStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TaskStatusCode = typeof TaskStatusCode[keyof typeof TaskStatusCode];
