/**
 * ActConsentDirective codes are used to specify the type of Consent Directive to which a Consent Directive Act conforms.
 * http://terminology.hl7.org/ValueSet/v3-ActConsentDirective
 */
export const ActConsentDirectiveCode = {
  /**
   * ActConsentDirective
   */
  _ActConsentDirective: "_ActConsentDirective",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActConsentDirectiveCode =
  typeof ActConsentDirectiveCode[keyof typeof ActConsentDirectiveCode];
