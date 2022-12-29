/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipTemporallyPertains
 */
export const ActRelationshipTemporallyPertainsCode = {
  /**
   * ActRelationshipTemporallyPertainsEnd
   */
  ActRelationshipTemporallyPertainsEnd: "_ActRelationshipTemporallyPertainsEnd",

  /**
   * ActRelationshipTemporallyPertainsStart
   */
  ActRelationshipTemporallyPertainsStart:
    "_ActRelationshipTemporallyPertainsStart",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipTemporallyPertainsCode =
  typeof ActRelationshipTemporallyPertainsCode[keyof typeof ActRelationshipTemporallyPertainsCode];
