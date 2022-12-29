/**
 * Value Set of codes that specify a reason the subject did not receive full disclosure.
 * http://terminology.hl7.org/ValueSet/v2-0501
 */
export const Hl7VSConsentNonDisclosureReasonCode = {
  /**
   * Emergency
   */
  Emergency: "E",

  /**
   * Rx Private
   */
  RxPrivate: "RX",

  /**
   * Patient Request
   */
  PatientRequest: "PR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSConsentNonDisclosureReasonCode =
  typeof Hl7VSConsentNonDisclosureReasonCode[keyof typeof Hl7VSConsentNonDisclosureReasonCode];
