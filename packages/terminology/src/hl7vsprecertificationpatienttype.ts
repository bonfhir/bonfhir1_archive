/**
 * Value Set of codes that specify the category or type of patient for which this certification is requested.
 * http://terminology.hl7.org/ValueSet/v2-0150
 */
export const Hl7VSPrecertificationPatientTypeCode = {
  /**
   * Emergency
   */
  ER: "ER",

  /**
   * Inpatient elective
   */
  IPE: "IPE",

  /**
   * Outpatient elective
   */
  OPE: "OPE",

  /**
   * Urgent
   */
  UR: "UR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPrecertificationPatientTypeCode =
  typeof Hl7VSPrecertificationPatientTypeCode[keyof typeof Hl7VSPrecertificationPatientTypeCode];
