/**
 * Value Set of codes that specify the type for the master file record identifier.
 * http://terminology.hl7.org/ValueSet/v2-0355
 */
export const Hl7VSPrimaryKeyValueTypeCode = {
  /**
   * Person location
   */
  PL: "PL",

  /**
   * Coded element
   */
  CE: "CE",

  /**
   * Coded with Exceptions
   */
  CWE: "CWE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPrimaryKeyValueTypeCode =
  typeof Hl7VSPrimaryKeyValueTypeCode[keyof typeof Hl7VSPrimaryKeyValueTypeCode];
