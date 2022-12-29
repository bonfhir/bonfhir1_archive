/**
 * This is a very unspecific relationship from one item of clinical information to another. It does not judge about the role the pertinent information plays.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipPertains
 */
export const ActRelationshipPertainsCode = {
  /**
   * has pertinent information
   */
  haspertinentinformation: "PERT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipPertainsCode =
  typeof ActRelationshipPertainsCode[keyof typeof ActRelationshipPertainsCode];
