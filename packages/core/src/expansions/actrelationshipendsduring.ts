/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsDuring
 */
export const ActRelationshipEndsDuringCode = {
  /**
   * ends during
   */
  EDU: "EDU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEndsDuringCode =
  typeof ActRelationshipEndsDuringCode[keyof typeof ActRelationshipEndsDuringCode];
