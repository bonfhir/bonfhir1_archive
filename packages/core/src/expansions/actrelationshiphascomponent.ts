/**
 * A collection of sub-services as steps or subtasks performed for the source service. Services may be performed sequentially or concurrently.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasComponent
 */
export const ActRelationshipHasComponentCode = {
  /**
   * has component
   */
  COMP: "COMP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasComponentCode =
  typeof ActRelationshipHasComponentCode[keyof typeof ActRelationshipHasComponentCode];
