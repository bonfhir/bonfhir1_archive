/**
 * Patient VIP code
 * http://terminology.hl7.org/ValueSet/v3-PatientImportance
 */
export const PatientImportanceCode = {
  /**
   * Board Member
   */
  BM: "BM",

  /**
   * Physician Family Member
   */
  DFM: "DFM",

  /**
   * Staff Physician
   */
  DR: "DR",

  /**
   * Financial Donor
   */
  FD: "FD",

  /**
   * Foreign Dignitary
   */
  FOR: "FOR",

  /**
   * Government Dignitary
   */
  GOVT: "GOVT",

  /**
   * Staff Family Member
   */
  SFM: "SFM",

  /**
   * Staff Member
   */
  STF: "STF",

  /**
   * Very Important Person
   */
  VIP: "VIP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PatientImportanceCode =
  typeof PatientImportanceCode[keyof typeof PatientImportanceCode];
