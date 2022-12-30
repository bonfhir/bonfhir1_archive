/**
 * This value set contains 4 concepts commonly used as answers to items in a questionnaire.
 * http://terminology.hl7.org/ValueSet/yes-no-unknown-not-asked
 */
export const YesNoUnknownNotAskedCode = {
  /**
   * Yes
   */
  Y: "Y",

  /**
   * No
   */
  N: "N",

  /**
   * Unknown
   */
  ASKU: "ASKU",

  /**
   * Not Asked
   */
  NASK: "NASK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type YesNoUnknownNotAskedCode =
  typeof YesNoUnknownNotAskedCode[keyof typeof YesNoUnknownNotAskedCode];
