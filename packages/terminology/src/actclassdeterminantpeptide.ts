/**
 * **Description:**A determinant peptide in a polypeptide as described by polypeptide.
 * http://terminology.hl7.org/ValueSet/v3-ActClassDeterminantPeptide
 */
export const ActClassDeterminantPeptideCode = {
  /**
   * determinant peptide
   */
  determinantpeptide: "DETPOL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassDeterminantPeptideCode =
  typeof ActClassDeterminantPeptideCode[keyof typeof ActClassDeterminantPeptideCode];
