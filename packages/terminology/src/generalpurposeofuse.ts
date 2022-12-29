/**
 * Supports communication of purpose of use at a general level.
 * http://terminology.hl7.org/ValueSet/v3-GeneralPurposeOfUse
 */
export const GeneralPurposeOfUseCode = {
  /**
   * coverage under policy or program
   */
  coverageunderpolicyorprogram: "COVERAGE",

  /**
   * Emergency Treatment
   */
  EmergencyTreatment: "ETREAT",

  /**
   * healthcare marketing
   */
  healthcaremarketing: "HMARKT",

  /**
   * healthcare operations
   */
  healthcareoperations: "HOPERAT",

  /**
   * healthcare payment
   */
  healthcarepayment: "HPAYMT",

  /**
   * healthcare research
   */
  healthcareresearch: "HRESCH",

  /**
   * patient requested
   */
  patientrequested: "PATRQT",

  /**
   * public health
   */
  publichealth: "PUBHLTH",

  /**
   * treatment
   */
  treatment: "TREAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GeneralPurposeOfUseCode =
  typeof GeneralPurposeOfUseCode[keyof typeof GeneralPurposeOfUseCode];
