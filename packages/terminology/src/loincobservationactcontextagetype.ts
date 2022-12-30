/**
 * **Definition:**The set of LOINC codes for the act of determining the period of time that has elapsed since an entity was born or created.
 * http://terminology.hl7.org/ValueSet/v3-LOINCObservationActContextAgeType
 */
export const LOINCObservationActContextAgeTypeCode = {
  /**
   * age patient qn est
   */
  "21611-9": "21611-9",

  /**
   * age patient qn reported
   */
  "21612-7": "21612-7",

  /**
   * age patient qn calc
   */
  "29553-5": "29553-5",

  /**
   * age patient qn definition
   */
  "30525-0": "30525-0",

  /**
   * age at onset of adverse event
   */
  "30972-4": "30972-4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LOINCObservationActContextAgeTypeCode =
  typeof LOINCObservationActContextAgeTypeCode[keyof typeof LOINCObservationActContextAgeTypeCode];
