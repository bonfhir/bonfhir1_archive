/**
 * Order is performed as issued, but other action taken to mitigate potential adverse effects
 * http://terminology.hl7.org/ValueSet/v3-OtherActionTakenManagementCode
 */
export const OtherActionTakenManagementCodeCode = {
  /**
   * Other Action Taken
   */
  OtherActionTaken: "8",

  /**
   * Provided Patient Education
   */
  ProvidedPatientEducation: "10",

  /**
   * Added Concurrent Therapy
   */
  AddedConcurrentTherapy: "11",

  /**
   * Temporarily Suspended Concurrent Therapy
   */
  TemporarilySuspendedConcurrentTherapy: "12",

  /**
   * Stopped Concurrent Therapy
   */
  StoppedConcurrentTherapy: "13",

  /**
   * Instituted Ongoing Monitoring Program
   */
  InstitutedOngoingMonitoringProgram: "9",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OtherActionTakenManagementCodeCode =
  typeof OtherActionTakenManagementCodeCode[keyof typeof OtherActionTakenManagementCodeCode];
