/**
 * Value Set of codes that specify the type of number used for the practitioner identification.
 * http://terminology.hl7.org/ValueSet/v2-0338
 */
export const Hl7VSPractitionerIdNumberTypeCode = {
  /**
   * County number
   */
  CY: "CY",

  /**
   * Drug Enforcement Administration registration number
   */
  DEA: "DEA",

  /**
   * General ledger number
   */
  GL: "GL",

  /**
   * Labor and industries number
   */
  LI: "LI",

  /**
   * Labor and industries number
   */
  "L&I": "L&I",

  /**
   * Practitioner Medicaid number
   */
  MCD: "MCD",

  /**
   * Practitioner Medicare number
   */
  MCR: "MCR",

  /**
   * QA number
   */
  QA: "QA",

  /**
   * State license
   */
  SL: "SL",

  /**
   * Tax ID number
   */
  TAX: "TAX",

  /**
   * Training License Number
   */
  TRL: "TRL",

  /**
   * Medicare/CMS (formerly HCFA)'s Universal Physician Identification numbers
   */
  UPIN: "UPIN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPractitionerIdNumberTypeCode =
  typeof Hl7VSPractitionerIdNumberTypeCode[keyof typeof Hl7VSPractitionerIdNumberTypeCode];
