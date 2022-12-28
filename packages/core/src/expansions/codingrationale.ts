/**
 * Identifies how to interpret the instance of the code, codeSystem value in a set of translations. Since HL7 (or a government body) may mandate that codes from certain code systems be sent in conformant messages, other synonyms that are sent in the translation set need to be distinguished among the originally captured source, the HL7 specified code, or some future role. When this code is NULL, it indicates that the translation is an undefined type. When valued, this property must contain one of the following values:

SRC - Source (or original) code HL7 - HL7 Specified or Mandated SH - both HL7 mandated and the original code (precoordination)

There may be additional values added to this value set as we work through the use of codes in messages and determine other Use Cases requiring special interpretation of the translations.
 * http://terminology.hl7.org/ValueSet/v3-CodingRationale
 */
export const CodingRationaleCode = {
  /**
   * originally produced code
   */
  O: "O",

  /**
   * original and required
   */
  OR: "OR",

  /**
   * post-coded
   */
  P: "P",

  /**
   * post-coded and required
   */
  PR: "PR",

  /**
   * required
   */
  R: "R",

  /**
   * HL7 Specified or Mandated
   */
  HL7: "HL7",

  /**
   * Both HL7 mandated and the original code
   */
  SH: "SH",

  /**
   * Source (or original) code
   */
  SRC: "SRC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CodingRationaleCode =
  typeof CodingRationaleCode[keyof typeof CodingRationaleCode];
