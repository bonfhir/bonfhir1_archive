/**
 * **Description:**Limits confidentiality to effectively a yes/no decision.

*Usage Note:*x\_VeryBasicConfidentialityKind is a subset of Confidentiality codes that are used as metadata indicating the receiver responsibility to comply with normally applicable jurisdictional privacy law or disclosure authorization or that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject.
 * http://terminology.hl7.org/ValueSet/v3-xVeryBasicConfidentialityKind
 */
export const XVeryBasicConfidentialityKindCode = {
  /**
   * normal
   */
  N: "N",

  /**
   * restricted
   */
  R: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XVeryBasicConfidentialityKindCode =
  typeof XVeryBasicConfidentialityKindCode[keyof typeof XVeryBasicConfidentialityKindCode];
