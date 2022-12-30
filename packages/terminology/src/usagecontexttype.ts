/**
 * A code that specifies a type of context being specified by a usage context.
 * http://terminology.hl7.org/ValueSet/usage-context-type
 */
export const UsageContextTypeCode = {
  /**
   * Gender
   */
  gender: "gender",

  /**
   * Age Range
   */
  age: "age",

  /**
   * Clinical Focus
   */
  focus: "focus",

  /**
   * User Type
   */
  user: "user",

  /**
   * Workflow Setting
   */
  workflow: "workflow",

  /**
   * Workflow Task
   */
  task: "task",

  /**
   * Clinical Venue
   */
  venue: "venue",

  /**
   * Species
   */
  species: "species",

  /**
   * Program
   */
  program: "program",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UsageContextTypeCode =
  typeof UsageContextTypeCode[keyof typeof UsageContextTypeCode];
