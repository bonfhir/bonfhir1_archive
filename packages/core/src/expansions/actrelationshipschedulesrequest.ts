/**
 * Associates a specific time (and associated resources) with a scheduling request or other intent.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipSchedulesRequest
 */
export const ActRelationshipSchedulesRequestCode = {
  /**
   * schedules request
   */
  SCH: "SCH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipSchedulesRequestCode =
  typeof ActRelationshipSchedulesRequestCode[keyof typeof ActRelationshipSchedulesRequestCode];
