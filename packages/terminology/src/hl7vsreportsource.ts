/**
 * Value Set of codes that identify where a report sender learned about an event.
 * http://terminology.hl7.org/ValueSet/v2-0235
 */
export const Hl7VSReportSourceCode = {
  /**
   * Clinical trial
   */
  Clinicaltrial: "C",

  /**
   * Literature
   */
  Literature: "L",

  /**
   * Health professional
   */
  Healthprofessional: "H",

  /**
   * Regulatory agency
   */
  Regulatoryagency: "R",

  /**
   * Database/registry/poison control center
   */
  Databaseregistrypoisoncontrolcenter: "D",

  /**
   * Non-healthcare professional
   */
  Nonhealthcareprofessional: "N",

  /**
   * Patient
   */
  Patient: "P",

  /**
   * Manufacturer/marketing authority holder
   */
  Manufacturermarketingauthorityholder: "M",

  /**
   * Distributor
   */
  Distributor: "E",

  /**
   * Other
   */
  Other: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReportSourceCode =
  typeof Hl7VSReportSourceCode[keyof typeof Hl7VSReportSourceCode];
