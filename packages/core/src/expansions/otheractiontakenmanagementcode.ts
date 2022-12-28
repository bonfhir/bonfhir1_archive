/**
 * Order is performed as issued, but other action taken to mitigate potential adverse effects
 * http://terminology.hl7.org/ValueSet/v3-OtherActionTakenManagementCode
 */
export const OtherActionTakenManagementCodeCode = {
  /**
   * Other Action Taken
   */
  "8": "8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OtherActionTakenManagementCodeCode =
  typeof OtherActionTakenManagementCodeCode[keyof typeof OtherActionTakenManagementCodeCode];
