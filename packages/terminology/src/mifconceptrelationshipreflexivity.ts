/**
 * Codes for use in the ext-mif-relationship-reflexivity to capture V3 Model Interchange Format (MIF) SupportedConceptRelationship.reflexivity values
 * http://terminology.hl7.org/ValueSet/mif-conceptRelationshipReflexivity
 */
export const MIFConceptRelationshipReflexivityCode = {
  /**
   *
   */
  reflexive: "reflexive",

  /**
   *
   */
  irreflexive: "irreflexive",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MIFConceptRelationshipReflexivityCode =
  typeof MIFConceptRelationshipReflexivityCode[keyof typeof MIFConceptRelationshipReflexivityCode];
