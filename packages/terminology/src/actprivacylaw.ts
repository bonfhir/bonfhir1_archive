/**
 * ActPrivacyLaw codes may be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies. May be used to further specify rationale for assignment of other ActPrivacyPolicy codes in the US realm, e.g., ETH and 42CFRPart2 can be differentiated from ETH and Title38Part1.
 * http://terminology.hl7.org/ValueSet/v3-ActPrivacyLaw
 */
export const ActPrivacyLawCode = {
  /**
   * ActPrivacyLaw
   */
  ActPrivacyLaw: "_ActPrivacyLaw",

  /**
   * General Data Protection Regulation
   */
  GeneralDataProtectionRegulation: "_ActGDPRPrivacyLaw",

  /**
   * GDPR Consent
   */
  GDPRConsent: "GDPRCONSENT",

  /**
   * _ActUSPrivacyLaw
   */
  _ActUSPrivacyLaw: "_ActUSPrivacyLaw",

  /**
   * 42 CFR Part2
   */
  FortyTwoCFRPart2: "42CFRPart2",

  /**
   * Common Rule
   */
  CommonRule: "CommonRule",

  /**
   * HIPAA Authorization for Disclosure
   */
  HIPAAAuthorizationforDisclosure: "HIPAAAuth",

  /**
   * HIPAA Consent
   */
  HIPAAConsent: "HIPAAConsent",

  /**
   * HIPAA notice of privacy practices
   */
  HIPAAnoticeofprivacypractices: "HIPAANOPP",

  /**
   * HIPAA psychotherapy notes
   */
  HIPAApsychotherapynotes: "HIPAAPsyNotes",

  /**
   * HIPAA Right of Access
   */
  HIPAARightofAccess: "HIPAAROA",

  /**
   * HIPAA self-pay
   */
  HIPAAselfpay: "HIPAASelfPay",

  /**
   * Title 38 Section 7332
   */
  Title38Section7332: "Title38Section7332",

  /**
   * HIPAA Consent
   */
  HIPAAConsent: "a) HIPAAConsent",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPrivacyLawCode =
  typeof ActPrivacyLawCode[keyof typeof ActPrivacyLawCode];
