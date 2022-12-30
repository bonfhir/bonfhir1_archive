/**
 * Types of relationships between two goals.
 * http://terminology.hl7.org/ValueSet/goal-relationship-type
 */
export const GoalRelationshipTypeCode = {
  /**
   * Predecessor
   */
  predecessor: "predecessor",

  /**
   * Successor
   */
  successor: "successor",

  /**
   * Replacement
   */
  replacement: "replacement",

  /**
   * Milestone
   */
  milestone: "milestone",

  /**
   * Other
   */
  other: "other",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GoalRelationshipTypeCode =
  typeof GoalRelationshipTypeCode[keyof typeof GoalRelationshipTypeCode];
