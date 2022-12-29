/**
 * Value Set of codes which specify the kind of information that is required to satisfy a query request.  The values define the type of transaction inquiry.
 * http://terminology.hl7.org/ValueSet/v2-0048
 */
export const Hl7VSWhatSubjectFilterCode = {
  /**
   * Advice/diagnosis
   */
  Advicediagnosis: "ADV",

  /**
   * Nursing unit lookup (returns patients in beds, excluding empty beds)
   */
  Nursingunitlookupreturnspatientsinbedsexcludingemptybeds: "ANU",

  /**
   * Patient name lookup
   */
  Patientnamelookup: "APN",

  /**
   * Physician lookup
   */
  Physicianlookup: "APP",

  /**
   * Nursing unit lookup (returns patients in beds, including empty beds)
   */
  Nursingunitlookupreturnspatientsinbedsincludingemptybeds: "ARN",

  /**
   * Medical record number query, returns visits for a medical record number
   */
  Medicalrecordnumberqueryreturnsvisitsforamedicalrecordnumber: "APM",

  /**
   * Account number query, return matching visit
   */
  Accountnumberqueryreturnmatchingvisit: "APA",

  /**
   * Cancel.  Used to cancel a query
   */
  CancelUsedtocancelaquery: "CAN",

  /**
   * Demographics
   */
  Demographics: "DEM",

  /**
   * Financial
   */
  Financial: "FIN",

  /**
   * Generate new identifier
   */
  Generatenewidentifier: "GID",

  /**
   * Goals
   */
  Goals: "GOL",

  /**
   * Most recent inpatient
   */
  Mostrecentinpatient: "MRI",

  /**
   * Most recent outpatient
   */
  Mostrecentoutpatient: "MRO",

  /**
   * Network clock
   */
  Networkclock: "NCK",

  /**
   * Network status change
   */
  Networkstatuschange: "NSC",

  /**
   * Network statistic
   */
  Networkstatistic: "NST",

  /**
   * Order
   */
  Order: "ORD",

  /**
   * Other
   */
  Other: "OTH",

  /**
   * Problems
   */
  Problems: "PRB",

  /**
   * Procedure
   */
  Procedure: "PRO",

  /**
   * Result
   */
  Result: "RES",

  /**
   * Pharmacy administration information
   */
  Pharmacyadministrationinformation: "RAR",

  /**
   * Pharmacy encoded order information
   */
  Pharmacyencodedorderinformation: "RER",

  /**
   * Pharmacy dispense information
   */
  Pharmacydispenseinformation: "RDR",

  /**
   * Pharmacy give information
   */
  Pharmacygiveinformation: "RGR",

  /**
   * Master file query
   */
  Masterfilequery: "MFQ",

  /**
   * Pharmacy prescription information
   */
  Pharmacyprescriptioninformation: "ROR",

  /**
   * All schedule related information, including open slots, booked slots, blocked slots
   */
  Allschedulerelatedinformationincludingopenslotsbookedslotsblockedslots: "SAL",

  /**
   * Booked slots on the identified schedule
   */
  Bookedslotsontheidentifiedschedule: "SBK",

  /**
   * Blocked slots on the identified schedule
   */
  Blockedslotsontheidentifiedschedule: "SBL",

  /**
   * First open slot on the identified schedule after the start date/tiem
   */
  Firstopenslotontheidentifiedscheduleafterthestartdatetiem: "SOF",

  /**
   * Open slots on the identified schedule between the begin and end of the start date/time range
   */
  Openslotsontheidentifiedschedulebetweenthebeginandendofthestartdatetimerange:
    "SOP",

  /**
   * Time slots available for a single appointment
   */
  Timeslotsavailableforasingleappointment: "SSA",

  /**
   * Time slots available for a recurring appointment
   */
  Timeslotsavailableforarecurringappointment: "SSR",

  /**
   * Status
   */
  Status: "STA",

  /**
   * Vaccine Information
   */
  VaccineInformation: "VXI",

  /**
   * Get cross-referenced identifiers
   */
  Getcrossreferencedidentifiers: "XID",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSWhatSubjectFilterCode =
  typeof Hl7VSWhatSubjectFilterCode[keyof typeof Hl7VSWhatSubjectFilterCode];
