/**
 * A code that specifies a type of context being specified by a usage context.
 * http://terminology.hl7.org/ValueSet/usage-context-type
 */
export const UsageContextTypeCode = {
  /**
   * Gender
   */
  Gender: "gender",

  /**
   * Age Range
   */
  AgeRange: "age",

  /**
   * Clinical Focus
   */
  ClinicalFocus: "focus",

  /**
   * User Type
   */
  UserType: "user",

  /**
   * Workflow Setting
   */
  WorkflowSetting: "workflow",

  /**
   * Workflow Task
   */
  WorkflowTask: "task",

  /**
   * Clinical Venue
   */
  ClinicalVenue: "venue",

  /**
   * Species
   */
  Species: "species",

  /**
   * Program
   */
  Program: "program",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UsageContextTypeCode =
  typeof UsageContextTypeCode[keyof typeof UsageContextTypeCode];
