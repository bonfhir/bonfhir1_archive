/**
 * Codes for use in the ext-mif-relationship-relationshipKind to capture V3 Model Interchange Format (MIF) SupportedConceptRelationship.relationshipKind values
 * http://terminology.hl7.org/ValueSet/mif-conceptRelationshipKind
 */
export const MIFConceptRelationshipKindCode = {
  /**
   *
   */
  Specializes: "Specializes",

  /**
   *
   */
  ComponentOf: "ComponentOf",

  /**
   *
   */
  GroupedBy: "GroupedBy",

  /**
   *
   */
  LessThan: "LessThan",

  /**
   *
   */
  DefinitionallyQualifies: "DefinitionallyQualifies",

  /**
   *
   */
  NonDefinitionallyQualifies: "NonDefinitionallyQualifies",

  /**
   *
   */
  Generalizes: "Generalizes",

  /**
   *
   */
  Component: "Component",

  /**
   *
   */
  InGroup: "InGroup",

  /**
   *
   */
  GreaterThan: "GreaterThan",

  /**
   *
   */
  DefinitionallyQualifiedBy: "DefinitionallyQualifiedBy",

  /**
   *
   */
  NonDefinitionallyQualifiedBy: "NonDefinitionallyQualifiedBy",

  /**
   *
   */
  Other: "Other",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MIFConceptRelationshipKindCode =
  typeof MIFConceptRelationshipKindCode[keyof typeof MIFConceptRelationshipKindCode];
