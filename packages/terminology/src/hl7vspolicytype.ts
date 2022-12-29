/**
 * Value Set of codes that specify the policy type.
 * http://terminology.hl7.org/ValueSet/v2-0147
 */
export const Hl7VSPolicyTypeCode = {
  /**
   * Ancillary
   */
  Ancillary: "ANC",

  /**
   * Second ancillary
   */
  Secondancillary: "2ANC",

  /**
   * Major medical
   */
  Majormedical: "MMD",

  /**
   * Second major medical
   */
  Secondmajormedical: "2MMD",

  /**
   * Third major medical
   */
  Thirdmajormedical: "3MMD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPolicyTypeCode =
  typeof Hl7VSPolicyTypeCode[keyof typeof Hl7VSPolicyTypeCode];
