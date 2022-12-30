/**
 * Value Set of codes that specify the level on which data are being sent.  It is the indicator used to send data at two levels, visit and account.  HL7 recommends sending an "A" or no value when the data in the message are at the account level or "V" to i
 * http://terminology.hl7.org/ValueSet/v2-0326
 */
export const Hl7VSVisitIndicatorCode = {
  /**
   * Account level
   */
  A: "A",

  /**
   * Visit level
   */
  V: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSVisitIndicatorCode =
  typeof Hl7VSVisitIndicatorCode[keyof typeof Hl7VSVisitIndicatorCode];
