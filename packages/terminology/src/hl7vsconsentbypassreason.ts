/**
 * Value Set of codes that specify the reason the subject's consent was not sought.
 * http://terminology.hl7.org/ValueSet/v2-0499
 */
export const Hl7VSConsentBypassReasonCode = {
  /**
   * Emergency
   */
  E: "E",

  /**
   * Professional Judgment
   */
  PJ: "PJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSConsentBypassReasonCode =
  typeof Hl7VSConsentBypassReasonCode[keyof typeof Hl7VSConsentBypassReasonCode];
