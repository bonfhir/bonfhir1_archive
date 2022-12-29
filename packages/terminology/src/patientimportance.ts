/**
 * Patient VIP code
 * http://terminology.hl7.org/ValueSet/v3-PatientImportance
 */
export const PatientImportanceCode = {
  /**
   * Board Member
   */
  BoardMember: "BM",

  /**
   * Physician Family Member
   */
  PhysicianFamilyMember: "DFM",

  /**
   * Staff Physician
   */
  StaffPhysician: "DR",

  /**
   * Financial Donor
   */
  FinancialDonor: "FD",

  /**
   * Foreign Dignitary
   */
  ForeignDignitary: "FOR",

  /**
   * Government Dignitary
   */
  GovernmentDignitary: "GOVT",

  /**
   * Staff Family Member
   */
  StaffFamilyMember: "SFM",

  /**
   * Staff Member
   */
  StaffMember: "STF",

  /**
   * Very Important Person
   */
  VeryImportantPerson: "VIP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PatientImportanceCode =
  typeof PatientImportanceCode[keyof typeof PatientImportanceCode];
