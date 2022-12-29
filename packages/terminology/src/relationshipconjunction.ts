/**
 * A code specifying the logical conjunction of the criteria among all the condition-links of Acts (e.g., and, or, exclusive-or.)

*Constraints:* All AND criteria must be true. If OR and AND criteria occur together, one criterion out of the OR-group must be true and all AND criteria must be true also. If XOR criteria occur together with OR and AND criteria, exactly one of the XOR criteria must be true, and at least one of the OR criteria and all AND criteria must be true. In other words, the sets of AND, OR, and XOR criteria are in turn combined by a logical AND operator (all AND criteria and at least one OR criterion and exactly one XOR criterion.) To overcome this ordering, Act criteria can be nested in any way necessary.
 * http://terminology.hl7.org/ValueSet/v3-RelationshipConjunction
 */
export const RelationshipConjunctionCode = {
  /**
   * and
   */
  and: "AND",

  /**
   * or
   */
  or: "OR",

  /**
   * exclusive or
   */
  exclusiveor: "XOR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RelationshipConjunctionCode =
  typeof RelationshipConjunctionCode[keyof typeof RelationshipConjunctionCode];
