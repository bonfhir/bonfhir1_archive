/**
 * A clinician enters a clinical note about a given patient
 * http://terminology.hl7.org/ValueSet/v3-ActTaskClinicalNoteEntryCode
 */
export const ActTaskClinicalNoteEntryCodeCode = {
  /**
   * clinical note entry task
   */
  CLINNOTEE: "CLINNOTEE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskClinicalNoteEntryCodeCode =
  typeof ActTaskClinicalNoteEntryCodeCode[keyof typeof ActTaskClinicalNoteEntryCodeCode];
