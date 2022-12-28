/**
 * Value Set of codes that specify a categorization of an academic institution that grants a degree to a Staff Member.
 * http://terminology.hl7.org/ValueSet/v2-0402
 */
export const Hl7VSSchoolTypeCode = {
  /**
   * Dental
   */
  D: "D",

  /**
   * Graduate
   */
  G: "G",

  /**
   * Medical
   */
  M: "M",

  /**
   * Undergraduate
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSchoolTypeCode =
  typeof Hl7VSSchoolTypeCode[keyof typeof Hl7VSSchoolTypeCode];
