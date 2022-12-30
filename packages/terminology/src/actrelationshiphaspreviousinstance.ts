/**
 * A relationship in which the target act is a predecessor instance to the source act. Generally each of these instances is similar, but no identical. In healthcare coverage it is used to link a claim item to a previous claim item that might have claimed for the same set of services.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasPreviousInstance
 */
export const ActRelationshipHasPreviousInstanceCode = {
  /**
   * has previous instance
   */
  PREV: "PREV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasPreviousInstanceCode =
  typeof ActRelationshipHasPreviousInstanceCode[keyof typeof ActRelationshipHasPreviousInstanceCode];
