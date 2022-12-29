/**
 * Codes for use in the ext-mif-relationship-transitivity to capture V3 Model Interchange Format (MIF) SupportedConceptRelationship.transitivity values
 * http://terminology.hl7.org/ValueSet/mif-conceptRelationshipTransitivity
 */
export const MIFConceptRelationshipTransitivityCode = {
  /**
   *
   */
  transitive: "transitive",

  /**
   *
   */
  antitransitive: "antitransitive",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MIFConceptRelationshipTransitivityCode =
  typeof MIFConceptRelationshipTransitivityCode[keyof typeof MIFConceptRelationshipTransitivityCode];
