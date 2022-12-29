/**
 * This value set includes the four Consent scope codes.
 * http://terminology.hl7.org/ValueSet/consent-scope
 */
export const ConsentScopeCodesCode = {
  /**
   * Research
   */
  Research: "research",

  /**
   * Privacy Consent
   */
  PrivacyConsent: "patient-privacy",

  /**
   * Treatment
   */
  Treatment: "treatment",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentScopeCodesCode =
  typeof ConsentScopeCodesCode[keyof typeof ConsentScopeCodesCode];
