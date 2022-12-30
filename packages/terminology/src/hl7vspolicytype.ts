/**
 * Value Set of codes that specify the policy type.
 * http://terminology.hl7.org/ValueSet/v2-0147
 */
export const Hl7VSPolicyTypeCode = {
  /**
   * Ancillary
   */
  ANC: "ANC",

  /**
   * Second ancillary
   */
  "2ANC": "2ANC",

  /**
   * Major medical
   */
  MMD: "MMD",

  /**
   * Second major medical
   */
  "2MMD": "2MMD",

  /**
   * Third major medical
   */
  "3MMD": "3MMD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPolicyTypeCode =
  typeof Hl7VSPolicyTypeCode[keyof typeof Hl7VSPolicyTypeCode];
