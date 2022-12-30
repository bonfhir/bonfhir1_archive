/**
 * A trigger-match links an actual service (e.g., an observation or procedure that took place) with a service in criterion mood. For example if the trigger is "observation of pain" and pain is actually observed, and if that pain-observation caused the trigger to fire, that pain-observation can be linked with the trigger.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipMatchesTrigger
 */
export const ActRelationshipMatchesTriggerCode = {
  /**
   * matches (trigger)
   */
  MTCH: "MTCH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipMatchesTriggerCode =
  typeof ActRelationshipMatchesTriggerCode[keyof typeof ActRelationshipMatchesTriggerCode];
