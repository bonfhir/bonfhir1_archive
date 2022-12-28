/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasMember
 */
export const ActRelationshipHasMemberCode = {
  /**
   * has member
   */
  MBR: "MBR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasMemberCode =
  typeof ActRelationshipHasMemberCode[keyof typeof ActRelationshipHasMemberCode];
