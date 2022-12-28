/**
 * An addendum (source) to an existing service object (target), containing supplemental information. The addendum is itself an original service object linked to the supplemented service object. The supplemented service object remains in place and its content and status are unaltered.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipIsAppendage
 */
export const ActRelationshipIsAppendageCode = {
  /**
   * is appendage
   */
  APND: "APND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipIsAppendageCode =
  typeof ActRelationshipIsAppendageCode[keyof typeof ActRelationshipIsAppendageCode];
