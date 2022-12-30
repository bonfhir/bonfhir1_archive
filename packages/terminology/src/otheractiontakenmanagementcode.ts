/**
 * Order is performed as issued, but other action taken to mitigate potential adverse effects
 * http://terminology.hl7.org/ValueSet/v3-OtherActionTakenManagementCode
 */
export const OtherActionTakenManagementCodeCode = {
  /**
   * Other Action Taken
   */
  "8": "8",

  /**
   * Provided Patient Education
   */
  "10": "10",

  /**
   * Added Concurrent Therapy
   */
  "11": "11",

  /**
   * Temporarily Suspended Concurrent Therapy
   */
  "12": "12",

  /**
   * Stopped Concurrent Therapy
   */
  "13": "13",

  /**
   * Instituted Ongoing Monitoring Program
   */
  "9": "9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OtherActionTakenManagementCodeCode =
  typeof OtherActionTakenManagementCodeCode[keyof typeof OtherActionTakenManagementCodeCode];
