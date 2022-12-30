/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipProphylaxisOf
 */
export const ActRelationshipProphylaxisOfCode = {
  /**
   * prophylaxis of
   */
  PRYLX: "PRYLX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipProphylaxisOfCode =
  typeof ActRelationshipProphylaxisOfCode[keyof typeof ActRelationshipProphylaxisOfCode];
