/**
 * A person (e.g., clinician, the patient herself) reviews patient information in the electronic medical record.
 * http://terminology.hl7.org/ValueSet/v3-ActTaskPatientInformationReviewCode
 */
export const ActTaskPatientInformationReviewCodeCode = {
  /**
   * patient information review task
   */
  patientinformationreviewtask: "PATINFO",

  /**
   * allergy list entry
   */
  allergylistentry: "ALLERLE",

  /**
   * clinical decision support intervention review
   */
  clinicaldecisionsupportinterventionreview: "CDSREV",

  /**
   * clinical note review task
   */
  clinicalnotereviewtask: "CLINNOTEREV",

  /**
   * discharge summary review task
   */
  dischargesummaryreviewtask: "DISCHSUMREV",

  /**
   * diagnosis list review task
   */
  diagnosislistreviewtask: "DIAGLISTREV",

  /**
   * immunization list entry
   */
  immunizationlistentry: "IMMLE",

  /**
   * laboratory results review task
   */
  laboratoryresultsreviewtask: "LABRREV",

  /**
   * microbiology results review task
   */
  microbiologyresultsreviewtask: "MICRORREV",

  /**
   * microbiology organisms results review task
   */
  microbiologyorganismsresultsreviewtask: "MICROORGRREV",

  /**
   * microbiology sensitivity test results review task
   */
  microbiologysensitivitytestresultsreviewtask: "MICROSENSRREV",

  /**
   * medication list review task
   */
  medicationlistreviewtask: "MLREV",

  /**
   * medication administration record work list review task
   */
  medicationadministrationrecordworklistreviewtask: "MARWLREV",

  /**
   * orders review task
   */
  ordersreviewtask: "OREV",

  /**
   * pathology report review task
   */
  pathologyreportreviewtask: "PATREPREV",

  /**
   * problem list review task
   */
  problemlistreviewtask: "PROBLISTREV",

  /**
   * radiology report review task
   */
  radiologyreportreviewtask: "RADREPREV",

  /**
   * reminder list entry
   */
  reminderlistentry: "REMLE",

  /**
   * wellness reminder list entry
   */
  wellnessreminderlistentry: "WELLREMLE",

  /**
   * risk assessment instrument task
   */
  riskassessmentinstrumenttask: "RISKASSESS",

  /**
   * falls risk assessment instrument task
   */
  fallsriskassessmentinstrumenttask: "FALLRISK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActTaskPatientInformationReviewCodeCode =
  typeof ActTaskPatientInformationReviewCodeCode[keyof typeof ActTaskPatientInformationReviewCodeCode];
