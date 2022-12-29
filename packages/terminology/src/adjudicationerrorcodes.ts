/**
 * This value set includes a smattering of adjudication codes.
 * http://terminology.hl7.org/ValueSet/adjudication-error
 */
export const AdjudicationErrorCodesCode = {
  /**
   * Missing Identifier
   */
  MissingIdentifier: "a001",

  /**
   * Missing Creation Date
   */
  MissingCreationDate: "a002",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdjudicationErrorCodesCode =
  typeof AdjudicationErrorCodesCode[keyof typeof AdjudicationErrorCodesCode];
