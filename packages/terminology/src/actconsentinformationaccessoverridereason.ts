/**
 * **Definition:** Use to convey the reason that a provider may or has accessed personal healthcare information. Typically, this involves overriding the subject's consent directives.
 * http://terminology.hl7.org/ValueSet/v3-ActConsentInformationAccessOverrideReason
 */
export const ActConsentInformationAccessOverrideReasonCode = {
  /**
   * ActConsentInformationAccessOverrideReason
   */
  ActConsentInformationAccessOverrideReason:
    "_ActConsentInformationAccessOverrideReason",

  /**
   * emergency treatment override
   */
  emergencytreatmentoverride: "OVRER",

  /**
   * incompetency override
   */
  incompetencyoverride: "OVRINCOMP",

  /**
   * professional judgment override
   */
  professionaljudgmentoverride: "OVRPJ",

  /**
   * public safety override
   */
  publicsafetyoverride: "OVRPS",

  /**
   * third party safety override
   */
  thirdpartysafetyoverride: "OVRTPS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActConsentInformationAccessOverrideReasonCode =
  typeof ActConsentInformationAccessOverrideReasonCode[keyof typeof ActConsentInformationAccessOverrideReasonCode];
