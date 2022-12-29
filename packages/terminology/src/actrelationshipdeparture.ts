/**
 * The relationship that links to a Transportation Act (target) from another Act (source) indicating that the subject of the source Act departed from the source Act by means of the target Transportation act.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipDeparture
 */
export const ActRelationshipDepartureCode = {
  /**
   * departure
   */
  departure: "DEP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipDepartureCode =
  typeof ActRelationshipDepartureCode[keyof typeof ActRelationshipDepartureCode];
