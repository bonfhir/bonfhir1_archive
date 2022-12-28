/**
 * Sensitivity codes are not useful for interoperability outside of a policy domain because sensitivity policies are typically localized and vary drastically across policy domains even for the same information category because of differing organizational business rules, security policies, and jurisdictional requirements. For example, an "employee" sensitivity code would make little sense for use outside of a policy domain. "Taboo" would rarely be useful outside of a policy domain unless there are jurisdictional requirements requiring that a provider disclose sensitive information to a patient directly.

Sensitivity codes may be more appropriate in a legacy system's Master Files in order to notify those who access a patient's orders and observations about the sensitivity policies that apply. Newer systems may have a security engine that uses a sensitivity policy's criteria directly. The specializable Sensitivity Act.code may be useful in some scenarious if used in combination with a sensitivity identifier and/or Act.title.
 * http://terminology.hl7.org/ValueSet/v3-InformationSensitivityPolicy
 */
export const InformationSensitivityPolicyCode = {
  /**
   * InformationSensitivityPolicy
   */
  _InformationSensitivityPolicy: "_InformationSensitivityPolicy",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InformationSensitivityPolicyCode =
  typeof InformationSensitivityPolicyCode[keyof typeof InformationSensitivityPolicyCode];
