/**
 * Value Set of codes that specify additional information about the blood component class associated with the Universal Service ID.  The placer of the order can specify any required processing of the blood product that must be completed prior to t
 * http://terminology.hl7.org/ValueSet/v2-0508
 */
export const Hl7VSBloodProductProcessingRequirementsCode = {
  /**
   * Leukoreduced
   */
  LR: "LR",

  /**
   * Irradiated
   */
  IR: "IR",

  /**
   * CMV Safe
   */
  CS: "CS",

  /**
   * Fresh unit
   */
  FR: "FR",

  /**
   * Autologous Unit
   */
  AU: "AU",

  /**
   * Directed Unit
   */
  DI: "DI",

  /**
   * HLA Matched
   */
  HL: "HL",

  /**
   * CMV Negative
   */
  CM: "CM",

  /**
   * Hemoglobin S Negative
   */
  HB: "HB",

  /**
   * Washed
   */
  WA: "WA",

  /**
   * IgA Deficient
   */
  IG: "IG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBloodProductProcessingRequirementsCode =
  typeof Hl7VSBloodProductProcessingRequirementsCode[keyof typeof Hl7VSBloodProductProcessingRequirementsCode];
