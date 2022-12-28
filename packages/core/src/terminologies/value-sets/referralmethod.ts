/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 * http://hl7.org/fhir/ValueSet/service-referral-method
 */
export const ReferralMethodCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReferralMethodCode =
  typeof ReferralMethodCode[keyof typeof ReferralMethodCode];
