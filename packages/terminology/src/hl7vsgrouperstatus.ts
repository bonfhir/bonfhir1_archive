/**
 * Value Set of codes that specify the status of a grouper in general.
 * http://terminology.hl7.org/ValueSet/v2-0734
 */
export const Hl7VSGrouperStatusCode = {
  /**
   * Normal grouping
   */
  Normalgrouping: "0",

  /**
   * Invalid or missing primary diagnosis
   */
  Invalidormissingprimarydiagnosis: "1",

  /**
   * Diagnosis is not allowed to be primary
   */
  Diagnosisisnotallowedtobeprimary: "2",

  /**
   * Data does not fulfill DRG criteria
   */
  DatadoesnotfulfillDRGcriteria: "3",

  /**
   * Invalid age, admission date, date of birth or discharge date
   */
  Invalidageadmissiondatedateofbirthordischargedate: "4",

  /**
   * Invalid gender
   */
  Invalidgender: "5",

  /**
   * Invalid discharge status
   */
  Invaliddischargestatus: "6",

  /**
   * Invalid weight ad admission
   */
  Invalidweightadadmission: "7",

  /**
   * Invalid length of stay
   */
  Invalidlengthofstay: "8",

  /**
   * Invalid field "same day"
   */
  Invalidfieldsameday: "9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSGrouperStatusCode =
  typeof Hl7VSGrouperStatusCode[keyof typeof Hl7VSGrouperStatusCode];
