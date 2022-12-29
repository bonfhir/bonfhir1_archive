/**
 * Used to assign a "name" to a condition thread. Source is a condition node, target can be any service.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipAssignsName
 */
export const ActRelationshipAssignsNameCode = {
  /**
   * assigns name
   */
  assignsname: "NAME",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipAssignsNameCode =
  typeof ActRelationshipAssignsNameCode[keyof typeof ActRelationshipAssignsNameCode];
