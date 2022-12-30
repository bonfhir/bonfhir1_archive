/**
 * **Description:** A task or action that a user may perform in a clinical information system.
 * http://terminology.hl7.org/ValueSet/v3-ActTaskCode
 */
export const ActTaskCodeCode = {
  /**
   * ActTaskCode
   */
  _ActTaskCode: "_ActTaskCode",

  /**
   * order entry task
   */
  OE: "OE",

  /**
   * laboratory test order entry task
   */
  LABOE: "LABOE",

  /**
   * medication order entry task
   */
  MEDOE: "MEDOE",

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
export type ActTaskCodeCode =
  typeof ActTaskCodeCode[keyof typeof ActTaskCodeCode];
