/**
 * Status codes specifying a patient's or a patient's representative's consent for responsibility to pay for potentially uninsured services.  Note that this set of codes is generally used in the US only.
 * http://terminology.hl7.org/ValueSet/v2-0339
 */
export const Hl7VSAdvancedBeneficiaryNoticeCodeCode = {
  /**
   * Service is subject to medical necessity procedures
   */
  "1": "1",

  /**
   * Patient has been informed of responsibility, and agrees to pay for service
   */
  "2": "2",

  /**
   * Patient has been informed of responsibility, and asks that the payer be billed
   */
  "3": "3",

  /**
   * Advanced Beneficiary Notice has not been signed
   */
  "4": "4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAdvancedBeneficiaryNoticeCodeCode =
  typeof Hl7VSAdvancedBeneficiaryNoticeCodeCode[keyof typeof Hl7VSAdvancedBeneficiaryNoticeCodeCode];
