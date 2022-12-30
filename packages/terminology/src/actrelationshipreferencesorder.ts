/**
 * Relates either an appointment request or an appointment to the order for the service being scheduled.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipReferencesOrder
 */
export const ActRelationshipReferencesOrderCode = {
  /**
   * references order
   */
  OREF: "OREF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipReferencesOrderCode =
  typeof ActRelationshipReferencesOrderCode[keyof typeof ActRelationshipReferencesOrderCode];
