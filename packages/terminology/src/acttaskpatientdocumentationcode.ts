/**
 * A person enters documentation about a given patient.
 * http://terminology.hl7.org/ValueSet/v3-ActTaskPatientDocumentationCode
 */
export const ActTaskPatientDocumentationCodeCode = {
  /**
   * patient documentation task
   */
  PATDOC: "PATDOC",

  /**
   * allergy list review
   */
  ALLERLREV: "ALLERLREV",

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

  /**
   * immunization list review
   */
  IMMLREV: "IMMLREV",

  /**
   * reminder list review
   */
  REMLREV: "REMLREV",

  /**
   * wellness reminder list review
   */
  WELLREMLREV: "WELLREMLREV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskPatientDocumentationCodeCode =
  typeof ActTaskPatientDocumentationCodeCode[keyof typeof ActTaskPatientDocumentationCodeCode];
