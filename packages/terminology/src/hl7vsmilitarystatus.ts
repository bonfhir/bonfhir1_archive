/**
 * Value Set of codes that specify the military status of the patient.  This field is defined by CMS or other regulatory agencies.
 * http://terminology.hl7.org/ValueSet/v2-0142
 */
export const Hl7VSMilitaryStatusCode = {
  /**
   * Active duty
   */
  Activeduty: "ACT",

  /**
   * Retired
   */
  Retired: "RET",

  /**
   * Deceased
   */
  Deceased: "DEC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMilitaryStatusCode =
  typeof Hl7VSMilitaryStatusCode[keyof typeof Hl7VSMilitaryStatusCode];
