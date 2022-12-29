/**
 * Value Set of codes that specify the type for the master file record identifier.
 * http://terminology.hl7.org/ValueSet/v2-0355
 */
export const Hl7VSPrimaryKeyValueTypeCode = {
  /**
   * Person location
   */
  Personlocation: "PL",

  /**
   * Coded element
   */
  Codedelement: "CE",

  /**
   * Coded with Exceptions
   */
  CodedwithExceptions: "CWE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPrimaryKeyValueTypeCode =
  typeof Hl7VSPrimaryKeyValueTypeCode[keyof typeof Hl7VSPrimaryKeyValueTypeCode];
