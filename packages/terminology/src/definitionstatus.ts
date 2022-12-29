/**
 * Codes identifying the lifecycle stage of a definition.
 * http://terminology.hl7.org/ValueSet/definition-status
 */
export const DefinitionStatusCode = {
  /**
   * Draft
   */
  Draft: "draft",

  /**
   * Active
   */
  Active: "active",

  /**
   * Withdrawn
   */
  Withdrawn: "withdrawn",

  /**
   * Unknown
   */
  Unknown: "unknown",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DefinitionStatusCode =
  typeof DefinitionStatusCode[keyof typeof DefinitionStatusCode];
