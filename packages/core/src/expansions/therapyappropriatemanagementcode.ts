/**
 * Confirmed drug therapy appropriate
 * http://terminology.hl7.org/ValueSet/v3-TherapyAppropriateManagementCode
 */
export const TherapyAppropriateManagementCodeCode = {
  /**
   * Therapy Appropriate
   */
  "1": "1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TherapyAppropriateManagementCodeCode =
  typeof TherapyAppropriateManagementCodeCode[keyof typeof TherapyAppropriateManagementCodeCode];
