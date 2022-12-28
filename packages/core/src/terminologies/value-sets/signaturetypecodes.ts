/**
 * The Digital Signature Purposes, an indication of the reason an entity signs a document. This is included in the signed information and can be used when determining accountability for various actions concerning the document. Examples include: author, transcriptionist/recorder, and witness.
 * http://hl7.org/fhir/ValueSet/signature-type
 */
export const SignatureTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SignatureTypeCodesCode =
  typeof SignatureTypeCodesCode[keyof typeof SignatureTypeCodesCode];
