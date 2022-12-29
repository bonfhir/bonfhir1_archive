/**
 * Concepts used by systems to categorize patients by sites.
 * http://terminology.hl7.org/ValueSet/v2-0004
 */
export const Hl7VSPatientClassCode = {
  /**
   * Emergency
   */
  Emergency: "E",

  /**
   * Inpatient
   */
  Inpatient: "I",

  /**
   * Outpatient
   */
  Outpatient: "O",

  /**
   * Preadmit
   */
  Preadmit: "P",

  /**
   * Recurring patient
   */
  Recurringpatient: "R",

  /**
   * Obstetrics
   */
  Obstetrics: "B",

  /**
   * Commercial Account
   */
  CommercialAccount: "C",

  /**
   * Not Applicable
   */
  NotApplicable: "N",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPatientClassCode =
  typeof Hl7VSPatientClassCode[keyof typeof Hl7VSPatientClassCode];
