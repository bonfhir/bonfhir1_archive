/**
 * This value set includes the Patient to subscriber relationship codes.
 * http://hl7.org/fhir/ValueSet/relationship
 */
export const BeneficiaryRelationshipCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BeneficiaryRelationshipCodesCode =
  typeof BeneficiaryRelationshipCodesCode[keyof typeof BeneficiaryRelationshipCodesCode];
