/**
 * Value Set of codes that specify the fee schedule reimbursement type applied to a line item.
 * http://terminology.hl7.org/ValueSet/v2-0470
 */
export const Hl7VSReimbursementTypeCodeCode = {
  /**
   * Outpatient Prospective Payment System
   */
  OutpatientProspectivePaymentSystem: "OPPS",

  /**
   * Packaged APC
   */
  PackagedAPC: "Pckg",

  /**
   * Clinical Laboratory APC
   */
  ClinicalLaboratoryAPC: "Lab",

  /**
   * Therapy APC
   */
  TherapyAPC: "Thrpy",

  /**
   * Durable Medical Equipment
   */
  DurableMedicalEquipment: "DME",

  /**
   * Epotein
   */
  Epotein: "EPO",

  /**
   * Screening Mammography APC
   */
  ScreeningMammographyAPC: "Mamm",

  /**
   * Partial Hospitalization APC
   */
  PartialHospitalizationAPC: "PartH",

  /**
   * Corneal Tissue APC
   */
  CornealTissueAPC: "Crnl",

  /**
   * This APC is not paid
   */
  ThisAPCisnotpaid: "NoPay",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReimbursementTypeCodeCode =
  typeof Hl7VSReimbursementTypeCodeCode[keyof typeof Hl7VSReimbursementTypeCodeCode];
