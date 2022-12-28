/**
 * This value set includes codes for the relationship between the Subscriber and the Beneficiary (insured/covered party/patient).
 * http://hl7.org/fhir/ValueSet/subscriber-relationship
 */
export const SubscriberRelationshipCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriberRelationshipCodesCode =
  typeof SubscriberRelationshipCodesCode[keyof typeof SubscriberRelationshipCodesCode];
