/**
 * **Definition:** Use to convey the reason that a provider may or has accessed personal healthcare information. Typically, this involves overriding the subject's consent directives.
 * http://terminology.hl7.org/ValueSet/v3-ActConsentInformationAccessOverrideReason
 */
export const ActConsentInformationAccessOverrideReasonCode = {
  /**
   * ActConsentInformationAccessOverrideReason
   */
  _ActConsentInformationAccessOverrideReason:
    "_ActConsentInformationAccessOverrideReason",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActConsentInformationAccessOverrideReasonCode =
  typeof ActConsentInformationAccessOverrideReasonCode[keyof typeof ActConsentInformationAccessOverrideReasonCode];
