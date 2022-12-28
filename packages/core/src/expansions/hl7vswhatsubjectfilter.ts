/**
 * Value Set of codes which specify the kind of information that is required to satisfy a query request.  The values define the type of transaction inquiry.
 * http://terminology.hl7.org/ValueSet/v2-0048
 */
export const Hl7VSWhatSubjectFilterCode = {
  /**
   * Advice/diagnosis
   */
  ADV: "ADV",

  /**
   * Nursing unit lookup (returns patients in beds, excluding empty beds)
   */
  ANU: "ANU",

  /**
   * Patient name lookup
   */
  APN: "APN",

  /**
   * Physician lookup
   */
  APP: "APP",

  /**
   * Nursing unit lookup (returns patients in beds, including empty beds)
   */
  ARN: "ARN",

  /**
   * Medical record number query, returns visits for a medical record number
   */
  APM: "APM",

  /**
   * Account number query, return matching visit
   */
  APA: "APA",

  /**
   * Cancel.  Used to cancel a query
   */
  CAN: "CAN",

  /**
   * Demographics
   */
  DEM: "DEM",

  /**
   * Financial
   */
  FIN: "FIN",

  /**
   * Generate new identifier
   */
  GID: "GID",

  /**
   * Goals
   */
  GOL: "GOL",

  /**
   * Most recent inpatient
   */
  MRI: "MRI",

  /**
   * Most recent outpatient
   */
  MRO: "MRO",

  /**
   * Network clock
   */
  NCK: "NCK",

  /**
   * Network status change
   */
  NSC: "NSC",

  /**
   * Network statistic
   */
  NST: "NST",

  /**
   * Order
   */
  ORD: "ORD",

  /**
   * Other
   */
  OTH: "OTH",

  /**
   * Problems
   */
  PRB: "PRB",

  /**
   * Procedure
   */
  PRO: "PRO",

  /**
   * Result
   */
  RES: "RES",

  /**
   * Pharmacy administration information
   */
  RAR: "RAR",

  /**
   * Pharmacy encoded order information
   */
  RER: "RER",

  /**
   * Pharmacy dispense information
   */
  RDR: "RDR",

  /**
   * Pharmacy give information
   */
  RGR: "RGR",

  /**
   * Master file query
   */
  MFQ: "MFQ",

  /**
   * Pharmacy prescription information
   */
  ROR: "ROR",

  /**
   * All schedule related information, including open slots, booked slots, blocked slots
   */
  SAL: "SAL",

  /**
   * Booked slots on the identified schedule
   */
  SBK: "SBK",

  /**
   * Blocked slots on the identified schedule
   */
  SBL: "SBL",

  /**
   * First open slot on the identified schedule after the start date/tiem
   */
  SOF: "SOF",

  /**
   * Open slots on the identified schedule between the begin and end of the start date/time range
   */
  SOP: "SOP",

  /**
   * Time slots available for a single appointment
   */
  SSA: "SSA",

  /**
   * Time slots available for a recurring appointment
   */
  SSR: "SSR",

  /**
   * Status
   */
  STA: "STA",

  /**
   * Vaccine Information
   */
  VXI: "VXI",

  /**
   * Get cross-referenced identifiers
   */
  XID: "XID",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSWhatSubjectFilterCode =
  typeof Hl7VSWhatSubjectFilterCode[keyof typeof Hl7VSWhatSubjectFilterCode];
