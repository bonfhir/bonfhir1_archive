/**
 * A person (e.g., clinician, the patient herself) reviews patient information in the electronic medical record.
 * http://terminology.hl7.org/ValueSet/v3-ActTaskPatientInformationReviewCode
 */
export const ActTaskPatientInformationReviewCodeCode = {
  /**
   * patient information review task
   */
  PATINFO: "PATINFO",

  /**
   * allergy list entry
   */
  ALLERLE: "ALLERLE",

  /**
   * clinical decision support intervention review
   */
  CDSREV: "CDSREV",

  /**
   * clinical note review task
   */
  CLINNOTEREV: "CLINNOTEREV",

  /**
   * discharge summary review task
   */
  DISCHSUMREV: "DISCHSUMREV",

  /**
   * diagnosis list review task
   */
  DIAGLISTREV: "DIAGLISTREV",

  /**
   * immunization list entry
   */
  IMMLE: "IMMLE",

  /**
   * laboratory results review task
   */
  LABRREV: "LABRREV",

  /**
   * microbiology results review task
   */
  MICRORREV: "MICRORREV",

  /**
   * microbiology organisms results review task
   */
  MICROORGRREV: "MICROORGRREV",

  /**
   * microbiology sensitivity test results review task
   */
  MICROSENSRREV: "MICROSENSRREV",

  /**
   * medication list review task
   */
  MLREV: "MLREV",

  /**
   * medication administration record work list review task
   */
  MARWLREV: "MARWLREV",

  /**
   * orders review task
   */
  OREV: "OREV",

  /**
   * pathology report review task
   */
  PATREPREV: "PATREPREV",

  /**
   * problem list review task
   */
  PROBLISTREV: "PROBLISTREV",

  /**
   * radiology report review task
   */
  RADREPREV: "RADREPREV",

  /**
   * reminder list entry
   */
  REMLE: "REMLE",

  /**
   * wellness reminder list entry
   */
  WELLREMLE: "WELLREMLE",

  /**
   * risk assessment instrument task
   */
  RISKASSESS: "RISKASSESS",

  /**
   * falls risk assessment instrument task
   */
  FALLRISK: "FALLRISK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskPatientInformationReviewCodeCode =
  typeof ActTaskPatientInformationReviewCodeCode[keyof typeof ActTaskPatientInformationReviewCodeCode];
