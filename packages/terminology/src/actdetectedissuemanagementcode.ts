/**
 * Codes dealing with the management of Detected Issue observations
 * http://terminology.hl7.org/ValueSet/v3-ActDetectedIssueManagementCode
 */
export const ActDetectedIssueManagementCodeCode = {
  /**
   * ActAdministrativeDetectedIssueManagementCode
   */
  ActAdministrativeDetectedIssueManagementCode:
    "_ActAdministrativeDetectedIssueManagementCode",

  /**
   * Authorization Issue Management Code
   */
  AuthorizationIssueManagementCode: "_AuthorizationIssueManagementCode",

  /**
   * emergency authorization override
   */
  emergencyauthorizationoverride: "EMAUTH",

  /**
   * authorization confirmed
   */
  authorizationconfirmed: "21",

  /**
   * Therapy Appropriate
   */
  TherapyAppropriate: "1",

  /**
   * Consulted Supplier
   */
  ConsultedSupplier: "19",

  /**
   * Assessed Patient
   */
  AssessedPatient: "2",

  /**
   * appropriate indication or diagnosis
   */
  appropriateindicationordiagnosis: "22",

  /**
   * prior therapy documented
   */
  priortherapydocumented: "23",

  /**
   * Patient Explanation
   */
  PatientExplanation: "3",

  /**
   * Consulted Other Source
   */
  ConsultedOtherSource: "4",

  /**
   * Consulted Prescriber
   */
  ConsultedPrescriber: "5",

  /**
   * Prescriber Declined Change
   */
  PrescriberDeclinedChange: "6",

  /**
   * Interacting Therapy No Longer Active/Planned
   */
  InteractingTherapyNoLongerActivePlanned: "7",

  /**
   * Supply Appropriate
   */
  SupplyAppropriate: "14",

  /**
   * Replacement
   */
  Replacement: "15",

  /**
   * Vacation Supply
   */
  VacationSupply: "16",

  /**
   * Weekend Supply
   */
  WeekendSupply: "17",

  /**
   * Leave of Absence
   */
  LeaveofAbsence: "18",

  /**
   * additional quantity on separate dispense
   */
  additionalquantityonseparatedispense: "20",

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

  /**
   * ActFinancialDetectedIssueManagementCode
   */
  ActFinancialDetectedIssueManagementCode:
    "_ActFinancialDetectedIssueManagementCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActDetectedIssueManagementCodeCode =
  typeof ActDetectedIssueManagementCodeCode[keyof typeof ActDetectedIssueManagementCodeCode];
