/**
 * Value Set of codes that specify additional information about the blood component class associated with the Universal Service ID.  The placer of the order can specify any required processing of the blood product that must be completed prior to t
 * http://terminology.hl7.org/ValueSet/v2-0508
 */
export const Hl7VSBloodProductProcessingRequirementsCode = {
  /**
   * Leukoreduced
   */
  Leukoreduced: "LR",

  /**
   * Irradiated
   */
  Irradiated: "IR",

  /**
   * CMV Safe
   */
  CMVSafe: "CS",

  /**
   * Fresh unit
   */
  Freshunit: "FR",

  /**
   * Autologous Unit
   */
  AutologousUnit: "AU",

  /**
   * Directed Unit
   */
  DirectedUnit: "DI",

  /**
   * HLA Matched
   */
  HLAMatched: "HL",

  /**
   * CMV Negative
   */
  CMVNegative: "CM",

  /**
   * Hemoglobin S Negative
   */
  HemoglobinSNegative: "HB",

  /**
   * Washed
   */
  Washed: "WA",

  /**
   * IgA Deficient
   */
  IgADeficient: "IG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSBloodProductProcessingRequirementsCode =
  typeof Hl7VSBloodProductProcessingRequirementsCode[keyof typeof Hl7VSBloodProductProcessingRequirementsCode];
