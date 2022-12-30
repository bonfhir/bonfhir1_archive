/**
 * Value Set of codes that describe why an insurance company has been contacted.
 * http://terminology.hl7.org/ValueSet/v2-0232
 */
export const Hl7VSInsuranceCompanyContactReasonCode = {
  /**
   * Medicare claim status
   */
  "01": "01",

  /**
   * Medicaid claim status
   */
  "02": "02",

  /**
   * Name/address change
   */
  "03": "03",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSInsuranceCompanyContactReasonCode =
  typeof Hl7VSInsuranceCompanyContactReasonCode[keyof typeof Hl7VSInsuranceCompanyContactReasonCode];
