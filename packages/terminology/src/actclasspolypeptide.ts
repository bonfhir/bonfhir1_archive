/**
 * **Description:**A polypeptide resulting from the translation of a gene.
 * http://terminology.hl7.org/ValueSet/v3-ActClassPolypeptide
 */
export const ActClassPolypeptideCode = {
  /**
   * polypeptide
   */
  polypeptide: "POL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassPolypeptideCode =
  typeof ActClassPolypeptideCode[keyof typeof ActClassPolypeptideCode];
