/**
 * Reference ranges are essentially descriptors of a class of result values assumed to be "normal", "abnormal", or "critical." Those can vary by sex, age, or any other criterion. Source and target are observations, the target is in criterion mood. This link type can act as a trigger in case of alarms being triggered by critical results.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasReferenceValues
 */
export const ActRelationshipHasReferenceValuesCode = {
  /**
   * has reference values
   */
  hasreferencevalues: "REFV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasReferenceValuesCode =
  typeof ActRelationshipHasReferenceValuesCode[keyof typeof ActRelationshipHasReferenceValuesCode];
