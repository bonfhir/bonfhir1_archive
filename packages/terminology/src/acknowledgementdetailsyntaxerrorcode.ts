/**
 * Reflects errors in the syntax or structure of the communication.
 * http://terminology.hl7.org/ValueSet/v3-AcknowledgementDetailSyntaxErrorCode
 */
export const AcknowledgementDetailSyntaxErrorCodeCode = {
  /**
   * Syntax error
   */
  Syntaxerror: "SYN",

  /**
   * Data type error
   */
  Datatypeerror: "SYN102",

  /**
   * Required element missing
   */
  Requiredelementmissing: "SYN105",

  /**
   * Required association missing
   */
  Requiredassociationmissing: "SYN100",

  /**
   * Required attribute missing
   */
  Requiredattributemissing: "SYN101",

  /**
   * Insufficient repetitions
   */
  Insufficientrepetitions: "SYN114",

  /**
   * Terminology error
   */
  Terminologyerror: "SYN106",

  /**
   * Value not found in code system
   */
  Valuenotfoundincodesystem: "SYN103",

  /**
   * Invalid code system in CNE
   */
  InvalidcodesysteminCNE: "SYN104",

  /**
   * Deprecated code
   */
  Deprecatedcode: "SYN107",

  /**
   * Number of repetitions exceeds limit
   */
  Numberofrepetitionsexceedslimit: "SYN108",

  /**
   * Number of association repetitions exceeds limit
   */
  Numberofassociationrepetitionsexceedslimit: "SYN110",

  /**
   * Number of attribute repetitions exceeds limit
   */
  Numberofattributerepetitionsexceedslimit: "SYN112",

  /**
   * Mandatory element with null value
   */
  Mandatoryelementwithnullvalue: "SYN109",

  /**
   * Value does not match fixed value
   */
  Valuedoesnotmatchfixedvalue: "SYN111",

  /**
   * Formal constraint violation
   */
  Formalconstraintviolation: "SYN113",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AcknowledgementDetailSyntaxErrorCodeCode =
  typeof AcknowledgementDetailSyntaxErrorCodeCode[keyof typeof AcknowledgementDetailSyntaxErrorCodeCode];
