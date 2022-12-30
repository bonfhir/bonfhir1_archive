/**
 * An HL7 administrative unit that owns artifacts in the FHIR specification.
 * http://terminology.hl7.org/ValueSet/hl7-work-group
 */
export const HL7WorkgroupCode = {
  /**
   * Community Based Collaborative Care
   */
  cbcc: "cbcc",

  /**
   * Clinical Decision Support
   */
  cds: "cds",

  /**
   * Clinical Quality Information
   */
  cqi: "cqi",

  /**
   * Clinical Genomics
   */
  cg: "cg",

  /**
   * Health Care Devices
   */
  dev: "dev",

  /**
   * Electronic Health Records
   */
  ehr: "ehr",

  /**
   * FHIR Infrastructure
   */
  fhir: "fhir",

  /**
   * Financial Management
   */
  fm: "fm",

  /**
   * Health Standards Integration
   */
  hsi: "hsi",

  /**
   * Imaging Integration
   */
  ii: "ii",

  /**
   * Infrastructure And Messaging
   */
  inm: "inm",

  /**
   * Implementable Technology Specifications
   */
  its: "its",

  /**
   * Modeling and Methodology
   */
  mnm: "mnm",

  /**
   * Orders and Observations
   */
  oo: "oo",

  /**
   * Patient Administration
   */
  pa: "pa",

  /**
   * Patient Care
   */
  pc: "pc",

  /**
   * Public Health and Emergency Response
   */
  pher: "pher",

  /**
   * Pharmacy
   */
  phx: "phx",

  /**
   * Biomedical Research and Regulation
   */
  brr: "brr",

  /**
   * Structured Documents
   */
  sd: "sd",

  /**
   * Security
   */
  sec: "sec",

  /**
   * US Realm Taskforce
   */
  us: "us",

  /**
   * Vocabulary
   */
  vocab: "vocab",

  /**
   * Application Implementation and Design
   */
  aid: "aid",

  /**
   * Clinical Attachments
   */
  att: "att",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HL7WorkgroupCode =
  typeof HL7WorkgroupCode[keyof typeof HL7WorkgroupCode];
