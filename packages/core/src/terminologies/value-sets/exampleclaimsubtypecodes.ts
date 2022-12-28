/**
 * This value set includes sample Claim SubType codes which are used to distinguish the claim types for example within type institutional there may be subtypes for emergency services, bed stay and transportation.
 * http://hl7.org/fhir/ValueSet/claim-subtype
 */
export const ExampleClaimSubTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleClaimSubTypeCodesCode =
  typeof ExampleClaimSubTypeCodesCode[keyof typeof ExampleClaimSubTypeCodesCode];
