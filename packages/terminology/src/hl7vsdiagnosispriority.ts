/**
 * Concepts that identify the significance or priority of the diagnosis code.  Note that the codes are numeric, and the number of the code represents the ordinal priority of the associated diagnosis.  Used in the DG1 segment in Version 2 messaging.
 * http://terminology.hl7.org/ValueSet/v2-0359
 */
export const Hl7VSDiagnosisPriorityCode = {
  /**
   * Not included in diagnosis ranking
   */
  Notincludedindiagnosisranking: "0",

  /**
   * The primary diagnosis
   */
  Theprimarydiagnosis: "1",

  /**
   * for ranked secondary diagnoses
   */
  forrankedsecondarydiagnoses: "2 and higher",

  /**
   * For ranked secondary diagnoses
   */
  Forrankedsecondarydiagnoses: "2 ...",

  /**
   * For  secondary diagnosis
   */
  Forsecondarydiagnosis: "2",

  /**
   * No suggested values defined
   */
  Nosuggestedvaluesdefined: "...",

  /**
   * For tertiary diagnosis
   */
  Fortertiarydiagnosis: "3",

  /**
   * For quaternary diagnosis
   */
  Forquaternarydiagnosis: "4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDiagnosisPriorityCode =
  typeof Hl7VSDiagnosisPriorityCode[keyof typeof Hl7VSDiagnosisPriorityCode];
