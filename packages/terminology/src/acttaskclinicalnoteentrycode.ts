/**
 * A clinician enters a clinical note about a given patient
 * http://terminology.hl7.org/ValueSet/v3-ActTaskClinicalNoteEntryCode
 */
export const ActTaskClinicalNoteEntryCodeCode = {
  /**
   * clinical note entry task
   */
  CLINNOTEE: "CLINNOTEE",

  /**
   * diagnosis list entry task
   */
  DIAGLISTE: "DIAGLISTE",

  /**
   * discharge instruction entry
   */
  DISCHINSTE: "DISCHINSTE",

  /**
   * discharge summary entry task
   */
  DISCHSUME: "DISCHSUME",

  /**
   * patient education entry
   */
  PATEDUE: "PATEDUE",

  /**
   * pathology report entry task
   */
  PATREPE: "PATREPE",

  /**
   * problem list entry task
   */
  PROBLISTE: "PROBLISTE",

  /**
   * radiology report entry task
   */
  RADREPE: "RADREPE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskClinicalNoteEntryCodeCode =
  typeof ActTaskClinicalNoteEntryCodeCode[keyof typeof ActTaskClinicalNoteEntryCodeCode];
