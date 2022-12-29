/**
 * Value Set of codes that specify the type of number used for the practitioner identification.
 * http://terminology.hl7.org/ValueSet/v2-0338
 */
export const Hl7VSPractitionerIdNumberTypeCode = {
  /**
   * County number
   */
  Countynumber: "CY",

  /**
   * Drug Enforcement Administration registration number
   */
  DrugEnforcementAdministrationregistrationnumber: "DEA",

  /**
   * General ledger number
   */
  Generalledgernumber: "GL",

  /**
   * Labor and industries number
   */
  Laborandindustriesnumber: "LI",

  /**
   * Labor and industries number
   */
  Laborandindustriesnumber: "L&I",

  /**
   * Practitioner Medicaid number
   */
  PractitionerMedicaidnumber: "MCD",

  /**
   * Practitioner Medicare number
   */
  PractitionerMedicarenumber: "MCR",

  /**
   * QA number
   */
  QAnumber: "QA",

  /**
   * State license
   */
  Statelicense: "SL",

  /**
   * Tax ID number
   */
  TaxIDnumber: "TAX",

  /**
   * Training License Number
   */
  TrainingLicenseNumber: "TRL",

  /**
   * Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers
   */
  MedicareCMSformerlyHCFAsUniversalPhysicianIdentificationnumbers: "UPIN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPractitionerIdNumberTypeCode =
  typeof Hl7VSPractitionerIdNumberTypeCode[keyof typeof Hl7VSPractitionerIdNumberTypeCode];
