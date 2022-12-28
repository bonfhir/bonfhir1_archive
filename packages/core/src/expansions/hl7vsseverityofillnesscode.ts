/**
 * Value Set of codes specifying the severity ranking of a patient's illness.
 * http://terminology.hl7.org/ValueSet/v2-0421
 */
export const Hl7VSSeverityOfIllnessCodeCode = {
  /**
   * Mild
   */
  MI: "MI",

  /**
   * Moderate
   */
  MO: "MO",

  /**
   * Severe
   */
  SE: "SE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSeverityOfIllnessCodeCode =
  typeof Hl7VSSeverityOfIllnessCodeCode[keyof typeof Hl7VSSeverityOfIllnessCodeCode];
