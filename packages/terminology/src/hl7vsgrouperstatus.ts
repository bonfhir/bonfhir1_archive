/**
 * Value Set of codes that specify the status of a grouper in general.
 * http://terminology.hl7.org/ValueSet/v2-0734
 */
export const Hl7VSGrouperStatusCode = {
  /**
   * Normal grouping
   */
  "0": "0",

  /**
   * Invalid or missing primary diagnosis
   */
  "1": "1",

  /**
   * Diagnosis is not allowed to be primary
   */
  "2": "2",

  /**
   * Data does not fulfill DRG criteria
   */
  "3": "3",

  /**
   * Invalid age, admission date, date of birth or discharge date
   */
  "4": "4",

  /**
   * Invalid gender
   */
  "5": "5",

  /**
   * Invalid discharge status
   */
  "6": "6",

  /**
   * Invalid weight ad admission
   */
  "7": "7",

  /**
   * Invalid length of stay
   */
  "8": "8",

  /**
   * Invalid field "same day"
   */
  "9": "9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSGrouperStatusCode =
  typeof Hl7VSGrouperStatusCode[keyof typeof Hl7VSGrouperStatusCode];
