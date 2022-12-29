/**
 * Codes for use in the ext-mif-relationship-symmetry to capture V3 Model Interchange Format (MIF) SupportedConceptRelationship.symmetry values
 * http://terminology.hl7.org/ValueSet/mif-conceptRelationshipSymmetry
 */
export const MIFConceptRelationshipSymmetryCode = {
  /**
   *
   */
  symmetric: "symmetric",

  /**
   *
   */
  antisymmetric: "antisymmetric",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MIFConceptRelationshipSymmetryCode =
  typeof MIFConceptRelationshipSymmetryCode[keyof typeof MIFConceptRelationshipSymmetryCode];
