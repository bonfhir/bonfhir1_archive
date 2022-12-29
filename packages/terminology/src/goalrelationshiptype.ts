/**
 * Types of relationships between two goals.
 * http://terminology.hl7.org/ValueSet/goal-relationship-type
 */
export const GoalRelationshipTypeCode = {
  /**
   * Predecessor
   */
  Predecessor: "predecessor",

  /**
   * Successor
   */
  Successor: "successor",

  /**
   * Replacement
   */
  Replacement: "replacement",

  /**
   * Milestone
   */
  Milestone: "milestone",

  /**
   * Other
   */
  Other: "other",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GoalRelationshipTypeCode =
  typeof GoalRelationshipTypeCode[keyof typeof GoalRelationshipTypeCode];
