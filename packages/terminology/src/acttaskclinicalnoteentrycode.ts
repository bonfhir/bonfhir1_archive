/**
 * A clinician enters a clinical note about a given patient
 * http://terminology.hl7.org/ValueSet/v3-ActTaskClinicalNoteEntryCode
 */
export const ActTaskClinicalNoteEntryCodeCode = {
  /**
   * clinical note entry task
   */
  clinicalnoteentrytask: "CLINNOTEE",

  /**
   * diagnosis list entry task
   */
  diagnosislistentrytask: "DIAGLISTE",

  /**
   * discharge instruction entry
   */
  dischargeinstructionentry: "DISCHINSTE",

  /**
   * discharge summary entry task
   */
  dischargesummaryentrytask: "DISCHSUME",

  /**
   * patient education entry
   */
  patienteducationentry: "PATEDUE",

  /**
   * pathology report entry task
   */
  pathologyreportentrytask: "PATREPE",

  /**
   * problem list entry task
   */
  problemlistentrytask: "PROBLISTE",

  /**
   * radiology report entry task
   */
  radiologyreportentrytask: "RADREPE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskClinicalNoteEntryCodeCode =
  typeof ActTaskClinicalNoteEntryCodeCode[keyof typeof ActTaskClinicalNoteEntryCodeCode];
