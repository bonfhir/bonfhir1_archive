/**
 * ActPrivacyPolicyType codes support the designation of the 1..\* policies that are applicable to an Act such as a Consent Directive, a Role such as a VIP Patient, or an Entity such as a patient who is a minor. 1..\* ActPrivacyPolicyType values may be associated with an Act or Role to indicate the policies that govern the assignment of an Act or Role confidentialityCode. Use of multiple ActPrivacyPolicyType values enables fine grain specification of applicable policies, but must be carefully assigned to ensure cogency and avoid creation of conflicting policy mandates. Statutory title may be named in the ActClassPolicy Act Act.title to specify which privacy policy is being referenced.
 * http://terminology.hl7.org/ValueSet/v3-ActPrivacyPolicy
 */
export const ActPrivacyPolicyCode = {
  /**
   * ActPrivacyPolicy
   */
  _ActPrivacyPolicy: "_ActPrivacyPolicy",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPrivacyPolicyCode =
  typeof ActPrivacyPolicyCode[keyof typeof ActPrivacyPolicyCode];
