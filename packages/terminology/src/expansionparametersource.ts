/**
 * Declares what the source of a parameter is.
 * http://terminology.hl7.org/ValueSet/expansion-parameter-source
 */
export const ExpansionParameterSourceCode = {
  /**
   * Client Input
   */
  input: "input",

  /**
   * Server Engine
   */
  server: "server",

  /**
   * Code System
   */
  codesystem: "codesystem",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExpansionParameterSourceCode =
  typeof ExpansionParameterSourceCode[keyof typeof ExpansionParameterSourceCode];
