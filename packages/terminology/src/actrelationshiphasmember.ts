/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasMember
 */
export const ActRelationshipHasMemberCode = {
  /**
   * has member
   */
  MBR: "MBR",

  /**
   * has step
   */
  STEP: "STEP",

  /**
   * arrival
   */
  ARR: "ARR",

  /**
   * departure
   */
  DEP: "DEP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasMemberCode =
  typeof ActRelationshipHasMemberCode[keyof typeof ActRelationshipHasMemberCode];
