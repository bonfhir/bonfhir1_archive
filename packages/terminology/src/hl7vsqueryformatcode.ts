/**
 * Value Set of codes which specify which of several types of formats for data to be returned in response to a query.
 * http://terminology.hl7.org/ValueSet/v2-0106
 */
export const Hl7VSQueryFormatCodeCode = {
  /**
   * Response is in display format
   */
  Responseisindisplayformat: "D",

  /**
   * Response is in record-oriented format
   */
  Responseisinrecordorientedformat: "R",

  /**
   * Response is in tabular format
   */
  Responseisintabularformat: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSQueryFormatCodeCode =
  typeof Hl7VSQueryFormatCodeCode[keyof typeof Hl7VSQueryFormatCodeCode];
