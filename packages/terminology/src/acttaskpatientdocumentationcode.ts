/**
 * A person enters documentation about a given patient.
 * http://terminology.hl7.org/ValueSet/v3-ActTaskPatientDocumentationCode
 */
export const ActTaskPatientDocumentationCodeCode = {
  /**
   * patient documentation task
   */
  patientdocumentationtask: "PATDOC",

  /**
   * allergy list review
   */
  allergylistreview: "ALLERLREV",

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

  /**
   * immunization list review
   */
  immunizationlistreview: "IMMLREV",

  /**
   * reminder list review
   */
  reminderlistreview: "REMLREV",

  /**
   * wellness reminder list review
   */
  wellnessreminderlistreview: "WELLREMLREV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskPatientDocumentationCodeCode =
  typeof ActTaskPatientDocumentationCodeCode[keyof typeof ActTaskPatientDocumentationCodeCode];
