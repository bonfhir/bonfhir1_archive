/**
 * A relationship in which the target act is referred to by the source act. This permits a simple reference relationship that distinguishes between the referent and the referee.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipRefersTo
 */
export const ActRelationshipRefersToCode = {
  /**
   * refers to
   */
  REFR: "REFR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipRefersToCode =
  typeof ActRelationshipRefersToCode[keyof typeof ActRelationshipRefersToCode];
