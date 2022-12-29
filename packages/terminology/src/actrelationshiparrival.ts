/**
 * The relationship that links to a Transportation Act (target) from another Act (source) indicating that the subject of the source Act entered into the source Act by means of the target Transportation act.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipArrival
 */
export const ActRelationshipArrivalCode = {
  /**
   * arrival
   */
  arrival: "ARR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipArrivalCode =
  typeof ActRelationshipArrivalCode[keyof typeof ActRelationshipArrivalCode];
