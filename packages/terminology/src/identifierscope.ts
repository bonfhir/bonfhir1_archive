/**
 * **Description:** Codes to specify the scope in which the identifier applies to the object with which it is associated, and used in the datatype property II.
 * http://terminology.hl7.org/ValueSet/v3-IdentifierScope
 */
export const IdentifierScopeCode = {
  /**
   * Business Identifier
   */
  BUSN: "BUSN",

  /**
   * Object Identifier
   */
  OBJ: "OBJ",

  /**
   * Version Identifier
   */
  VER: "VER",

  /**
   * View Specific Identifier
   */
  VW: "VW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IdentifierScopeCode =
  typeof IdentifierScopeCode[keyof typeof IdentifierScopeCode];
