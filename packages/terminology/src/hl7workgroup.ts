/**
 * An HL7 administrative unit that owns artifacts in the FHIR specification.
 * http://terminology.hl7.org/ValueSet/hl7-work-group
 */
export const HL7WorkgroupCode = {
  /**
   * Community Based Collaborative Care
   */
  CommunityBasedCollaborativeCare: "cbcc",

  /**
   * Clinical Decision Support
   */
  ClinicalDecisionSupport: "cds",

  /**
   * Clinical Quality Information
   */
  ClinicalQualityInformation: "cqi",

  /**
   * Clinical Genomics
   */
  ClinicalGenomics: "cg",

  /**
   * Health Care Devices
   */
  HealthCareDevices: "dev",

  /**
   * Electronic Health Records
   */
  ElectronicHealthRecords: "ehr",

  /**
   * FHIR Infrastructure
   */
  FHIRInfrastructure: "fhir",

  /**
   * Financial Management
   */
  FinancialManagement: "fm",

  /**
   * Health Standards Integration
   */
  HealthStandardsIntegration: "hsi",

  /**
   * Imaging Integration
   */
  ImagingIntegration: "ii",

  /**
   * Infrastructure And Messaging
   */
  InfrastructureAndMessaging: "inm",

  /**
   * Implementable Technology Specifications
   */
  ImplementableTechnologySpecifications: "its",

  /**
   * Modeling and Methodology
   */
  ModelingandMethodology: "mnm",

  /**
   * Orders and Observations
   */
  OrdersandObservations: "oo",

  /**
   * Patient Administration
   */
  PatientAdministration: "pa",

  /**
   * Patient Care
   */
  PatientCare: "pc",

  /**
   * Public Health and Emergency Response
   */
  PublicHealthandEmergencyResponse: "pher",

  /**
   * Pharmacy
   */
  Pharmacy: "phx",

  /**
   * Biomedical Research and Regulation
   */
  BiomedicalResearchandRegulation: "brr",

  /**
   * Structured Documents
   */
  StructuredDocuments: "sd",

  /**
   * Security
   */
  Security: "sec",

  /**
   * US Realm Taskforce
   */
  USRealmTaskforce: "us",

  /**
   * Vocabulary
   */
  Vocabulary: "vocab",

  /**
   * Application Implementation and Design
   */
  ApplicationImplementationandDesign: "aid",

  /**
   * Clinical Attachments
   */
  ClinicalAttachments: "att",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HL7WorkgroupCode =
  typeof HL7WorkgroupCode[keyof typeof HL7WorkgroupCode];
