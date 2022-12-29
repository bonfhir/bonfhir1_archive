/**
 * **Description:** A task or action that a user may perform in a clinical information system.
 * http://terminology.hl7.org/ValueSet/v3-ActTaskCode
 */
export const ActTaskCodeCode = {
  /**
   * ActTaskCode
   */
  ActTaskCode: "_ActTaskCode",

  /**
   * order entry task
   */
  orderentrytask: "OE",

  /**
   * laboratory test order entry task
   */
  laboratorytestorderentrytask: "LABOE",

  /**
   * medication order entry task
   */
  medicationorderentrytask: "MEDOE",

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
export type ActTaskCodeCode =
  typeof ActTaskCodeCode[keyof typeof ActTaskCodeCode];
