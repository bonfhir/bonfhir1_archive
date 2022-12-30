/**
 * Value Set of codes that specify the general severity of an allergy.
 * http://terminology.hl7.org/ValueSet/v2-0128
 */
export const Hl7VSAllergySeverityCode = {
  /**
   * Severe
   */
  SV: "SV",

  /**
   * Moderate
   */
  MO: "MO",

  /**
   * Mild
   */
  MI: "MI",

  /**
   * Unknown
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAllergySeverityCode =
  typeof Hl7VSAllergySeverityCode[keyof typeof Hl7VSAllergySeverityCode];
