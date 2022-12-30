/**
 * Value Set of codes that specify the relationship between the start/end of the related service request(s) and the current service request.
 * http://terminology.hl7.org/ValueSet/v2-0504
 */
export const Hl7VSSequenceConditionCodeCode = {
  /**
   * End related service request(s), end current service request.
   */
  EE: "EE",

  /**
   * End related service request(s), start current service request.
   */
  ES: "ES",

  /**
   * Start related service request(s), start current service request.
   */
  SS: "SS",

  /**
   * Start related service request(s), end current service request.
   */
  SE: "SE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSequenceConditionCodeCode =
  typeof Hl7VSSequenceConditionCodeCode[keyof typeof Hl7VSSequenceConditionCodeCode];
