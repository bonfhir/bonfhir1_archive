/**
 * A replacement source act replaces an existing target act. The state of the target act being replaced becomes obselete, but the act is typically still retained in the system for historical reference. The source and target must be of the same type.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipReplaces
 */
export const ActRelationshipReplacesCode = {
  /**
   * replaces
   */
  RPLC: "RPLC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipReplacesCode =
  typeof ActRelationshipReplacesCode[keyof typeof ActRelationshipReplacesCode];
