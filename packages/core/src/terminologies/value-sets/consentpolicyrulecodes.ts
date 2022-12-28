/**
 * This value set includes sample Regulatory consent policy types from the US and other regions.
 * http://hl7.org/fhir/ValueSet/consent-policy
 */
export const ConsentPolicyRuleCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentPolicyRuleCodesCode =
  typeof ConsentPolicyRuleCodesCode[keyof typeof ConsentPolicyRuleCodesCode];
