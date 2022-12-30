/**
 * **Description:** Used to enumerate the typical confidentiality constraints placed upon a clinical document.

*Usage Note:*x\_BasicConfidentialityKind is a subset of Confidentiality codes that are used as metadata indicating the receiver responsibility to comply with normally applicable jurisdictional privacy law or disclosure authorization; that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject; or that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject.
 * http://terminology.hl7.org/ValueSet/v3-xBasicConfidentialityKind
 */
export const XBasicConfidentialityKindCode = {
  /**
   * normal
   */
  N: "N",

  /**
   * restricted
   */
  R: "R",

  /**
   * very restricted
   */
  V: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XBasicConfidentialityKindCode =
  typeof XBasicConfidentialityKindCode[keyof typeof XBasicConfidentialityKindCode];
