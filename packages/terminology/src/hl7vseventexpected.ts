/**
 * Value Set of codes that communicate whether an event has been judged to be expected or unexpected.
 * http://terminology.hl7.org/ValueSet/v2-0239
 */
export const Hl7VSEventExpectedCode = {
  /**
   * Yes
   */
  Yes: "Y",

  /**
   * No
   */
  No: "N",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEventExpectedCode =
  typeof Hl7VSEventExpectedCode[keyof typeof Hl7VSEventExpectedCode];
