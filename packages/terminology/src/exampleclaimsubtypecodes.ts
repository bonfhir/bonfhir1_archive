/**
 * This value set includes sample Claim SubType codes which are used to distinguish the claim types for example within type institutional there may be subtypes for emergency services, bed stay and transportation.
 * http://terminology.hl7.org/ValueSet/claim-subtype
 */
export const ExampleClaimSubTypeCodesCode = {
  /**
   * Orthodontic Claim
   */
  OrthodonticClaim: "ortho",

  /**
   * Emergency Claim
   */
  EmergencyClaim: "emergency",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleClaimSubTypeCodesCode =
  typeof ExampleClaimSubTypeCodesCode[keyof typeof ExampleClaimSubTypeCodesCode];
