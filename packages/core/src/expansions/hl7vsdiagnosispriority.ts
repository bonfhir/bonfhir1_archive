/**
 * Concepts that identify the significance or priority of the diagnosis code.  Note that the codes are numeric, and the number of the code represents the ordinal priority of the associated diagnosis.  Used in the DG1 segment in Version 2 messaging.
 * http://terminology.hl7.org/ValueSet/v2-0359
 */
export const Hl7VSDiagnosisPriorityCode = {
  /**
   * Not included in diagnosis ranking
   */
  "0": "0",

  /**
   * The primary diagnosis
   */
  "1": "1",

  /**
   * for ranked secondary diagnoses
   */
  "2 and higher": "2 and higher",

  /**
   * For ranked secondary diagnoses
   */
  "2 ...": "2 ...",

  /**
   * For  secondary diagnosis
   */
  "2": "2",

  /**
   * No suggested values defined
   */
  "...": "...",

  /**
   * For tertiary diagnosis
   */
  "3": "3",

  /**
   * For quaternary diagnosis
   */
  "4": "4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDiagnosisPriorityCode =
  typeof Hl7VSDiagnosisPriorityCode[keyof typeof Hl7VSDiagnosisPriorityCode];
