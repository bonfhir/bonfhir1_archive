/**
 * Confirmed drug therapy appropriate
 * http://terminology.hl7.org/ValueSet/v3-TherapyAppropriateManagementCode
 */
export const TherapyAppropriateManagementCodeCode = {
  /**
   * Therapy Appropriate
   */
  "1": "1",

  /**
   * Consulted Supplier
   */
  "19": "19",

  /**
   * Assessed Patient
   */
  "2": "2",

  /**
   * appropriate indication or diagnosis
   */
  "22": "22",

  /**
   * prior therapy documented
   */
  "23": "23",

  /**
   * Patient Explanation
   */
  "3": "3",

  /**
   * Consulted Other Source
   */
  "4": "4",

  /**
   * Consulted Prescriber
   */
  "5": "5",

  /**
   * Prescriber Declined Change
   */
  "6": "6",

  /**
   * Interacting Therapy No Longer Active/Planned
   */
  "7": "7",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TherapyAppropriateManagementCodeCode =
  typeof TherapyAppropriateManagementCodeCode[keyof typeof TherapyAppropriateManagementCodeCode];
