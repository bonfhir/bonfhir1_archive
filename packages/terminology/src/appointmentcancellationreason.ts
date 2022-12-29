/**
 *
 * http://terminology.hl7.org/ValueSet/appointment-cancellation-reason
 */
export const AppointmentCancellationReasonCode = {
  /**
   * Patient
   */
  Patient: "pat",

  /**
   * Patient: Canceled via automated reminder system
   */
  PatientCanceledviaautomatedremindersystem: "pat-crs",

  /**
   * Patient: Canceled via Patient Portal
   */
  PatientCanceledviaPatientPortal: "pat-cpp",

  /**
   * Patient: Deceased
   */
  PatientDeceased: "pat-dec",

  /**
   * Patient: Feeling Better
   */
  PatientFeelingBetter: "pat-fb",

  /**
   * Patient: Lack of Transportation
   */
  PatientLackofTransportation: "pat-lt",

  /**
   * Patient: Member Terminated
   */
  PatientMemberTerminated: "pat-mt",

  /**
   * Patient: Moved
   */
  PatientMoved: "pat-mv",

  /**
   * Patient: Pregnant
   */
  PatientPregnant: "pat-preg",

  /**
   * Patient: Scheduled from Wait List
   */
  PatientScheduledfromWaitList: "pat-swl",

  /**
   * Patient: Unhappy/Changed Provider
   */
  PatientUnhappyChangedProvider: "pat-ucp",

  /**
   * Provider
   */
  Provider: "prov",

  /**
   * Provider: Personal
   */
  ProviderPersonal: "prov-pers",

  /**
   * Provider: Discharged
   */
  ProviderDischarged: "prov-dch",

  /**
   * Provider: Edu/Meeting
   */
  ProviderEduMeeting: "prov-edu",

  /**
   * Provider: Hospitalized
   */
  ProviderHospitalized: "prov-hosp",

  /**
   * Provider: Labs Out of Acceptable Range
   */
  ProviderLabsOutofAcceptableRange: "prov-labs",

  /**
   * Provider: MRI Screening Form Marked Do Not Proceed
   */
  ProviderMRIScreeningFormMarkedDoNotProceed: "prov-mri",

  /**
   * Provider: Oncology Treatment Plan Changes
   */
  ProviderOncologyTreatmentPlanChanges: "prov-onc",

  /**
   * Equipment Maintenance/Repair
   */
  EquipmentMaintenanceRepair: "maint",

  /**
   * Prep/Med Incomplete
   */
  PrepMedIncomplete: "meds-inc",

  /**
   * Other
   */
  Other: "other",

  /**
   * Other: CMS Therapy Cap Service Not Authorized
   */
  OtherCMSTherapyCapServiceNotAuthorized: "oth-cms",

  /**
   * Other: Error
   */
  OtherError: "oth-err",

  /**
   * Other: Financial
   */
  OtherFinancial: "oth-fin",

  /**
   * Other: Improper IV Access/Infiltrate IV
   */
  OtherImproperIVAccessInfiltrateIV: "oth-iv",

  /**
   * Other: No Interpreter Available
   */
  OtherNoInterpreterAvailable: "oth-int",

  /**
   * Other: Prep/Med/Results Unavailable
   */
  OtherPrepMedResultsUnavailable: "oth-mu",

  /**
   * Other: Room/Resource Maintenance
   */
  OtherRoomResourceMaintenance: "oth-room",

  /**
   * Other: Schedule Order Error
   */
  OtherScheduleOrderError: "oth-oerr",

  /**
   * Other: Silent Walk In Error
   */
  OtherSilentWalkInError: "oth-swie",

  /**
   * Other: Weather
   */
  OtherWeather: "oth-weath",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AppointmentCancellationReasonCode =
  typeof AppointmentCancellationReasonCode[keyof typeof AppointmentCancellationReasonCode];
