/**
 * This value set includes the four Consent scope codes.
 * http://terminology.hl7.org/ValueSet/consent-scope
 */
export const ConsentScopeCodesCode = {
  /**
   * Research
   */
  research: "research",

  /**
   * Privacy Consent
   */
  "patient-privacy": "patient-privacy",

  /**
   * Treatment
   */
  treatment: "treatment",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentScopeCodesCode =
  typeof ConsentScopeCodesCode[keyof typeof ConsentScopeCodesCode];
