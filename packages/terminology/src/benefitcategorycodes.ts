/**
 * This value set includes examples of Benefit Category codes.
 * http://terminology.hl7.org/ValueSet/ex-benefitcategory
 */
export const BenefitCategoryCodesCode = {
  /**
   * Medical Care
   */
  MedicalCare: "1",

  /**
   * Surgical
   */
  Surgical: "2",

  /**
   * Consultation
   */
  Consultation: "3",

  /**
   * Diagnostic XRay
   */
  DiagnosticXRay: "4",

  /**
   * Diagnostic Lab
   */
  DiagnosticLab: "5",

  /**
   * Renal Supplies
   */
  RenalSupplies: "14",

  /**
   * Diagnostic Dental
   */
  DiagnosticDental: "23",

  /**
   * Periodontics
   */
  Periodontics: "24",

  /**
   * Restorative
   */
  Restorative: "25",

  /**
   * Endodontics
   */
  Endodontics: "26",

  /**
   * Maxillofacial Prosthetics
   */
  MaxillofacialProsthetics: "27",

  /**
   * Adjunctive Dental Services
   */
  AdjunctiveDentalServices: "28",

  /**
   * Health Benefit Plan Coverage
   */
  HealthBenefitPlanCoverage: "30",

  /**
   * Dental Care
   */
  DentalCare: "35",

  /**
   * Dental Crowns
   */
  DentalCrowns: "36",

  /**
   * Dental Accident
   */
  DentalAccident: "37",

  /**
   * Hospital Room and Board
   */
  HospitalRoomandBoard: "49",

  /**
   * Major Medical
   */
  MajorMedical: "55",

  /**
   * Medically Related Transportation
   */
  MedicallyRelatedTransportation: "56",

  /**
   * In-vitro Fertilization
   */
  InvitroFertilization: "61",

  /**
   * MRI Scan
   */
  MRIScan: "62",

  /**
   * Donor Procedures
   */
  DonorProcedures: "63",

  /**
   * Maternity
   */
  Maternity: "69",

  /**
   * Renal Dialysis
   */
  RenalDialysis: "76",

  /**
   * Medical Coverage
   */
  MedicalCoverage: "F1",

  /**
   * Dental Coverage
   */
  DentalCoverage: "F3",

  /**
   * Hearing Coverage
   */
  HearingCoverage: "F4",

  /**
   * Vision Coverage
   */
  VisionCoverage: "F6",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BenefitCategoryCodesCode =
  typeof BenefitCategoryCodesCode[keyof typeof BenefitCategoryCodesCode];
