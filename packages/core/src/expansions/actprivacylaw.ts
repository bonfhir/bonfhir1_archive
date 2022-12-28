/**
 * ActPrivacyLaw codes may be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies. May be used to further specify rationale for assignment of other ActPrivacyPolicy codes in the US realm, e.g., ETH and 42CFRPart2 can be differentiated from ETH and Title38Part1.
 * http://terminology.hl7.org/ValueSet/v3-ActPrivacyLaw
 */
export const ActPrivacyLawCode = {
  /**
   * ActPrivacyLaw
   */
  _ActPrivacyLaw: "_ActPrivacyLaw",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPrivacyLawCode =
  typeof ActPrivacyLawCode[keyof typeof ActPrivacyLawCode];
