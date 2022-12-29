/**
 * A relationship that provides an ability to associate a financial transaction (target) as a cost to a clinical act (source). A clinical act may have an inherit cost associated with the execution or delivery of the service.

The financial transaction will define the cost of delivery or performance of the service.

Charges and costs are distinct terms. A charge defines what is charged or billed to another organization or entity within an organization. The cost defines what it costs an organization to perform or deliver a service or product.
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipHasCost
 */
export const ActRelationshipHasCostCode = {
  /**
   * has cost
   */
  hascost: "COST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipHasCostCode =
  typeof ActRelationshipHasCostCode[keyof typeof ActRelationshipHasCostCode];
