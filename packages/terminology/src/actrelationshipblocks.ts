/**
 * **Definition:** The source act is performed to block the effects of the target act. This act relationship should be used when describing near miss type incidents where potential harm could have occurred, but the action described in the source act blocked the potential harmful effects of the incident actually occurring.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipBlocks
 */
export const ActRelationshipBlocksCode = {
  /**
   * blocks
   */
  BLOCK: "BLOCK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipBlocksCode =
  typeof ActRelationshipBlocksCode[keyof typeof ActRelationshipBlocksCode];
