/**
 *
 * http://terminology.hl7.org/ValueSet/appointment-cancellation-reason
 */
export const AppointmentCancellationReasonCode = {
  /**
   * Patient
   */
  pat: "pat",

  /**
   * Patient: Canceled via automated reminder system
   */
  "pat-crs": "pat-crs",

  /**
   * Patient: Canceled via Patient Portal
   */
  "pat-cpp": "pat-cpp",

  /**
   * Patient: Deceased
   */
  "pat-dec": "pat-dec",

  /**
   * Patient: Feeling Better
   */
  "pat-fb": "pat-fb",

  /**
   * Patient: Lack of Transportation
   */
  "pat-lt": "pat-lt",

  /**
   * Patient: Member Terminated
   */
  "pat-mt": "pat-mt",

  /**
   * Patient: Moved
   */
  "pat-mv": "pat-mv",

  /**
   * Patient: Pregnant
   */
  "pat-preg": "pat-preg",

  /**
   * Patient: Scheduled from Wait List
   */
  "pat-swl": "pat-swl",

  /**
   * Patient: Unhappy/Changed Provider
   */
  "pat-ucp": "pat-ucp",

  /**
   * Provider
   */
  prov: "prov",

  /**
   * Provider: Personal
   */
  "prov-pers": "prov-pers",

  /**
   * Provider: Discharged
   */
  "prov-dch": "prov-dch",

  /**
   * Provider: Edu/Meeting
   */
  "prov-edu": "prov-edu",

  /**
   * Provider: Hospitalized
   */
  "prov-hosp": "prov-hosp",

  /**
   * Provider: Labs Out of Acceptable Range
   */
  "prov-labs": "prov-labs",

  /**
   * Provider: MRI Screening Form Marked Do Not Proceed
   */
  "prov-mri": "prov-mri",

  /**
   * Provider: Oncology Treatment Plan Changes
   */
  "prov-onc": "prov-onc",

  /**
   * Equipment Maintenance/Repair
   */
  maint: "maint",

  /**
   * Prep/Med Incomplete
   */
  "meds-inc": "meds-inc",

  /**
   * Other
   */
  other: "other",

  /**
   * Other: CMS Therapy Cap Service Not Authorized
   */
  "oth-cms": "oth-cms",

  /**
   * Other: Error
   */
  "oth-err": "oth-err",

  /**
   * Other: Financial
   */
  "oth-fin": "oth-fin",

  /**
   * Other: Improper IV Access/Infiltrate IV
   */
  "oth-iv": "oth-iv",

  /**
   * Other: No Interpreter Available
   */
  "oth-int": "oth-int",

  /**
   * Other: Prep/Med/Results Unavailable
   */
  "oth-mu": "oth-mu",

  /**
   * Other: Room/Resource Maintenance
   */
  "oth-room": "oth-room",

  /**
   * Other: Schedule Order Error
   */
  "oth-oerr": "oth-oerr",

  /**
   * Other: Silent Walk In Error
   */
  "oth-swie": "oth-swie",

  /**
   * Other: Weather
   */
  "oth-weath": "oth-weath",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AppointmentCancellationReasonCode =
  typeof AppointmentCancellationReasonCode[keyof typeof AppointmentCancellationReasonCode];
