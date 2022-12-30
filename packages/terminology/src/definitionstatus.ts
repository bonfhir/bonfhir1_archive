/**
 * Codes identifying the lifecycle stage of a definition.
 * http://terminology.hl7.org/ValueSet/definition-status
 */
export const DefinitionStatusCode = {
  /**
   * Draft
   */
  draft: "draft",

  /**
   * Active
   */
  active: "active",

  /**
   * Withdrawn
   */
  withdrawn: "withdrawn",

  /**
   * Unknown
   */
  unknown: "unknown",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DefinitionStatusCode =
  typeof DefinitionStatusCode[keyof typeof DefinitionStatusCode];
